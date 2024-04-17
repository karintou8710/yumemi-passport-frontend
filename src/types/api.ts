export type PopulationCompositionParams = {
  prefCode: number
  cityCode?: number
  addArea?: string
}

export type ResasResponseBase<T> = {
  statusCode?: string
  message: string | null
  result: T
}

export type ResasPrefecture = {
  prefCode: number
  prefName: string
}

export type ResasTotalPopulation = {
  label: '総人口'
  data: {
    year: number
    value: number
  }[]
}

export type ResasYoungPopulation = {
  label: '年少人口'
  data: {
    year: number
    value: number
    rate: number
  }[]
}

export type ResasWorkingPopulation = {
  label: '生産年齢人口'
  data: {
    year: number
    value: number
    rate: number
  }[]
}

export type ResasElderlyPopulation = {
  label: '老年人口'
  data: {
    year: number
    value: number
    rate: number
  }[]
}

export type ResasPopulationComposition = {
  boundaryYear: number
  data: (
    | ResasTotalPopulation
    | ResasYoungPopulation
    | ResasWorkingPopulation
    | ResasElderlyPopulation
  )[]
}

export type ResasResponsePref = ResasResponseBase<ResasPrefecture[]>
export type ResasResponsePopComp = ResasResponseBase<ResasPopulationComposition>
