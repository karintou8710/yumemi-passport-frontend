import { fetchResasPopulationComposition, fetchResasPrefectures } from '@/server/lib/api'

test('RESAS APIから県データの取得', async () => {
  const res = await fetchResasPrefectures()
  expect(res.message).toBe(null)
})

test('RESAS APIから人口構成の取得', async () => {
  const res = await fetchResasPopulationComposition({
    prefCode: 1, // 北海道
  })
  const s = res.result.data.find((v) => v.label === '総人口')
  expect(res.message).toBe(null)
})
