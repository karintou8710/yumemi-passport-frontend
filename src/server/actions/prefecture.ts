import { fetchResasPopulationComposition } from '@/server/lib/api'
import { PopulationCompositionParams } from '@/types/api'

export const fetchResasPopulationCompositionAction = async (
  params: PopulationCompositionParams,
) => {
  const data = await fetchResasPopulationComposition(params)
  return data
}
