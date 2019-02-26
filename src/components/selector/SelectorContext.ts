import { createContext } from 'react'

export interface SelectorContext {
  selectedValue?: string
  onSelect?: (value: string) => void
}

export const { Provider, Consumer } = createContext({})
