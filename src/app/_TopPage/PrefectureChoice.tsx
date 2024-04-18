import RegionCheckBox from '@/app/_TopPage/RegionCheckBox'
import { groupByRegion } from '@/lib/prefecture'
import { fetchResasPrefectures } from '@/server/lib/api'

type Props = {
  className?: string
}

export default async function PrefectureChoice({ className }: Props) {
  /*
    都道府県データは変更されることが滅多にないため、Full Route Cacheでビルド時にキャッシュする。
    仮に更新があった際は再ビルドになる。
  */
  const prefectures = await fetchResasPrefectures()
  const prefGroupByRegion = groupByRegion(prefectures.result)

  return (
    <div className={className}>
      <RegionCheckBox
        title='北海道・東北'
        prefectures={prefGroupByRegion.hokkaidoTohoku}
        defaultCheckedCode={1} // 北海道
        className='mb-6'
      />
      <RegionCheckBox title='関東' prefectures={prefGroupByRegion.kanto} className='mb-6' />
      <RegionCheckBox title='中部' prefectures={prefGroupByRegion.tyubu} className='mb-6' />
      <RegionCheckBox title='近畿' prefectures={prefGroupByRegion.kinki} className='mb-6' />
      <RegionCheckBox
        title='中国・四国'
        prefectures={prefGroupByRegion.tyugokuSikoku}
        className='mb-6'
      />
      <RegionCheckBox title='九州・沖縄' prefectures={prefGroupByRegion.kyusyuOkinawa} />
    </div>
  )
}
