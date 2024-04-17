import {
  PopulationCompositionParams,
  ResasResponseBase,
  ResasResponsePopComp,
  ResasResponsePref,
} from '@/types/api'

const RESAS_API_ENDPOINT = 'https://opendata.resas-portal.go.jp'
const RESAS_API_KEY = process.env.RESAS_API_KEY ?? ''

/* RESAS APIの400系のエラーはStatus Codeが200で、情報がJSONでレスポンスされる */

export const fetchResasPrefectures = async (): Promise<ResasResponsePref> => {
  const res = await fetch(`${RESAS_API_ENDPOINT}/api/v1/prefectures`, {
    headers: {
      'X-API-KEY': RESAS_API_KEY,
    },
  })

  if (!res.ok) {
    throw new Error('Http Error')
  }

  const data: ResasResponseBase<unknown> = await res.json()
  if (data.message) throw new Error(data.message)

  return data as ResasResponsePref
}

export const fetchResasPopulationComposition = async (
  params: PopulationCompositionParams,
): Promise<ResasResponsePopComp> => {
  const q = new URLSearchParams({ prefCode: String(params.prefCode) })
  // cityCodeが未指定の場合、すべての市区町村を表す「-」にする
  q.append('cityCode', params.cityCode ? String(params.cityCode) : '-')
  if (params.addArea) q.append('addArea', params.addArea)

  const url = `${RESAS_API_ENDPOINT}/api/v1/population/composition/perYear?${q.toString()}`
  const res = await fetch(url, {
    headers: {
      'X-API-KEY': RESAS_API_KEY,
    },
  })

  if (!res.ok) {
    throw new Error('Http Error')
  }

  const data: ResasResponseBase<unknown> = await res.json()
  if (data.message) throw new Error(data.message)

  return data as ResasResponsePopComp
}
