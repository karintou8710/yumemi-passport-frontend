import CheckBox from '@/components/atom/CheckBox'
import { groupByRegion } from '@/lib/prefecture'
import { fetchResasPrefectures } from '@/server/lib/api'

type Props = {
  className?: string
}

export default async function PrefectureChoice({ className }: Props) {
  const prefectures = await fetchResasPrefectures()
  const prefGroupByRegion = groupByRegion(prefectures.result)

  return (
    <div className={className}>
      <div className='mb-4'>
        <h2 className='mb-2 text-xl'>北海道・東北</h2>
        <div className='flex gap-6'>
          {prefGroupByRegion.hokkaidoTohoku.map((v) => (
            <CheckBox key={v.prefCode} label={v.prefName} />
          ))}
        </div>
      </div>
    </div>
  )
}
