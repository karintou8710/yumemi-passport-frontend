import ChartView from '@/app/_TopPage/ChartView'
import PrefectureChoice from '@/app/_TopPage/PrefectureChoice'

export default async function TopPage() {
  return (
    <main className='mx-auto mt-16 max-w-screen-lg rounded-md bg-white p-16'>
      <PrefectureChoice />
      <ChartView />
    </main>
  )
}
