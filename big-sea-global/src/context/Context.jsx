import { createContext } from 'react'

export const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={'hello'}>{children}</AppContext.Provider>
}
