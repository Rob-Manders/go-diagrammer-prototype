import React, { createContext, useReducer, useState } from 'react'
import { SelectedAction } from '../interfaces'
import useSetAction from '../hooks/useSetAction'
import useUpdateDiagram from '../hooks/useUpdateDiagram'

export const DiagrammerContext = createContext(null)

export default function DiagrammerContextProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [action, dispatchAction] = useReducer(useSetAction, {
    selectedAction: 'none',
    stoneColour: undefined,
    symbol: undefined,
    label: undefined
  })

  const [diagram, dispatchDiagram] = useReducer(useUpdateDiagram, {
    initialised: false,
    title: undefined,
    description: undefined,
    board: {
      width: undefined,
      height: undefined,
      location: 'full'
    },
    positions: [
      {
        caption: undefined,
        spaces: undefined
      }
    ]
  })

  const [position, setPosition] = useState<number>(0)

  return (
    <DiagrammerContext.Provider value={{ action, dispatchAction, diagram, dispatchDiagram, position, setPosition }}>
      {children}
    </DiagrammerContext.Provider>
  )
}
