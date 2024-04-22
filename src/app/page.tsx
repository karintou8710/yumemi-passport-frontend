import ChartView from '@/app/_TopPage/ChartView'
import PrefectureChoice from '@/app/_TopPage/PrefectureChoice'

export default async function TopPage() {
  return (
    <main className='mx-auto mt-0 max-w-screen-lg rounded-md bg-white px-4 py-8 lg:my-16 lg:p-16'>
      <PrefectureChoice />
      <ChartView className='mt-16' />
    </main>
  )
}
