import CheckBox from '@/components/atom/CheckBox'
import { HOKKAIDO_TOHOKU_PREF_IDS } from '@/constant'
import { fetchResasPrefectures } from '@/server/lib/api'

type Props = {
  className?: string
}

export default async function PrefectureChoice({ className }: Props) {
  const prefectures = await fetchResasPrefectures()
  const hokkaidoTohokuPrefs = prefectures.result.filter((v) =>
    HOKKAIDO_TOHOKU_PREF_IDS.includes(v.prefCode),
  )

  return (
    <div className={className}>
      <div className='mb-4'>
        <h2 className='mb-2 text-xl'>北海道・東北</h2>
        <div className='flex gap-6'>
          {hokkaidoTohokuPrefs.map((v) => (
            <CheckBox key={v.prefCode} label={v.prefName} />
          ))}
        </div>
      </div>
    </div>
  )
}
