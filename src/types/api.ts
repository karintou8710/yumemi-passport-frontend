export type PopulationCompositionParams = {
  prefCode: string
  cityCode: string
  addArea?: string
}

export type ResasResponseBase<T> = {
  message: string | null
  result: T
}

export type ResasPrefecture = {
  prefCode: number
  prefName: string
}

export type ResasResponsePref = ResasResponseBase<ResasPrefecture[]>
