'use client'

import { useCallback, useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import CheckBox from '@/components/atom/CheckBox'
import { fetchResasPopulationCompositionAction } from '@/server/actions/prefecture'
import { isLoadingState, selectedPrefListState } from '@/store'
import { ResasPrefecture, ResasResponsePopComp } from '@/types/api'

type Props = {
  title: string
  prefectures: ResasPrefecture[]
  defaultCheckedCode?: number
  className?: string
}

export default function RegionCheckBox({
  title,
  prefectures,
  defaultCheckedCode,
  className,
}: Props) {
  const setIsLoading = useSetRecoilState(isLoadingState)
  const setSelectedPrefList = useSetRecoilState(selectedPrefListState)

  // 初回レンダリング時のみ発火
  useEffect(() => {
    const fn = async () => {
      // defaultCheckedCodeが存在する都道府県のIDか確認
      if (
        defaultCheckedCode == undefined ||
        !prefectures.find((v) => v.prefCode === defaultCheckedCode)
      ) {
        return
      }

      setIsLoading(true)
      // Server Actionの例外時はError Boundariesを発火
      let res: ResasResponsePopComp
      try {
        res = await fetchResasPopulationCompositionAction({
          prefCode: defaultCheckedCode,
        })
      } catch (e) {
        // async内ではError Boundariesが使用不可
        console.error(e)
        alert('予期しない例外が発生しました。再度リロードしてお試しください。') // 意図的にロード画面を解除しない
        return
      }
      setSelectedPrefList((prev) => [
        ...prev,
        {
          prefCode: defaultCheckedCode,
          prefName: prefectures.find((v) => v.prefCode === defaultCheckedCode)?.prefName as string,
          ...res.result,
        },
      ])
      setIsLoading(false)
    }
    fn()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = useCallback(
    async (isChecked: boolean, prefCode: number, prefName: string) => {
      if (isChecked) {
        // ONにする

        // チェックボックスとデータを同期するため、データ取得時はローディング画面を表示して操作不可能にする
        setIsLoading(true)

        // Server Actionで県データを取得(API KEYを隠すため)
        let res: ResasResponsePopComp
        try {
          res = await fetchResasPopulationCompositionAction({
            prefCode: prefCode,
          })
        } catch (e) {
          // Event Handler内ではError Boundariesが使用不可
          console.error(e)
          alert('予期しない例外が発生しました。再度リロードしてお試しください。') // 意図的にロード画面を解除しない
          return
        }

        setSelectedPrefList((prev) => [
          ...prev,
          {
            prefCode: prefCode,
            prefName: prefName,
            ...res.result,
          },
        ])

        setIsLoading(false)
      } else {
        // OFFにする
        setSelectedPrefList((prev) => prev.filter((v) => v.prefCode !== prefCode))
      }
    },
    [setSelectedPrefList, setIsLoading],
  )

  return (
    <div className={className}>
      <h2 className='mb-4 text-lg before:mr-2 before:rounded-full before:border-l-8 before:border-lime-400 sm:text-2xl'>
        {title}
      </h2>
      <div className='flex flex-wrap gap-x-6 gap-y-4'>
        {prefectures.map((v) => (
          <CheckBox
            key={v.prefCode}
            label={v.prefName}
            defaultChecked={defaultCheckedCode === v.prefCode}
            onChange={(e) => handleChange(e.target.checked, v.prefCode, v.prefName)}
          />
        ))}
      </div>
    </div>
  )
}
