import React, { createContext } from 'react'

const DiagrammerContext = createContext<string>('')

export default function DiagrammerContextProvider({ children }: { children: JSX.Element }): JSX.Element {
  return <DiagrammerContext.Provider value={''}>{children}</DiagrammerContext.Provider>
}
