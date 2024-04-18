import { createContext } from 'react'

type TabContext = {
  currentValue: string
  setCurrentValue?: (value: string) => void
}

export const TabContext = createContext<TabContext>({ currentValue: '' })
export default TabContext.Provider
