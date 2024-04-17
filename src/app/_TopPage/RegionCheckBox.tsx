import CheckBox from '@/components/atom/CheckBox'
import { ResasPrefecture } from '@/types/api'

type Props = {
  title: string
  prefectures: ResasPrefecture[]
  className?: string
}

export default function RegionCheckBox({ title, prefectures, className }: Props) {
  return (
    <div className={className}>
      <h2 className='mb-4 text-2xl before:mr-2 before:rounded-full before:border-l-8 before:border-lime-400'>
        {title}
      </h2>
      <div className='flex flex-wrap gap-x-6 gap-y-4'>
        {prefectures.map((v) => (
          <CheckBox key={v.prefCode} label={v.prefName} />
        ))}
      </div>
    </div>
  )
}
