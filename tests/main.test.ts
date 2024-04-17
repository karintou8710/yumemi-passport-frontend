import { fetchResasPrefectures } from '@/server/lib/api'

test('RESAS APIから県データ取得', async () => {
  const res = await fetchResasPrefectures()
  expect(Array.isArray(res.result)).toBe(true)
})
