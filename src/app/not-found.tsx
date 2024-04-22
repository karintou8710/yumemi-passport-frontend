import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='mx-auto mt-0 max-w-screen-lg rounded-md bg-white px-4 py-8 text-center lg:my-16 lg:p-16'>
      <h2 className='text-4xl'>404: Not Found</h2>
      <div>
        <p className='mt-6'>お探しのページは見つかりませんでした。</p>
        <Link href='/' className='mt-4 block text-blue-500 hover:underline'>
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}
