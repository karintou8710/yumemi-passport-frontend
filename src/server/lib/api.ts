const RESAS_API_ENDPOINT = 'https://opendata.resas-portal.go.jp'
const RESAS_API_KEY = process.env.RESAS_API_KEY ?? ''

export const fetchResasPrefectures = async () => {
  const res = await fetch(`${RESAS_API_ENDPOINT}/api/v1/prefectures`, {
    headers: {
      'X-API-KEY': RESAS_API_KEY,
    },
  })

  if (!res.ok) {
    throw new Error('Http Error')
  }

  const data = await res.json()

  return data
}
