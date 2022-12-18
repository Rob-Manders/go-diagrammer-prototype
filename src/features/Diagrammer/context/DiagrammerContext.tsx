import React, { createContext, useReducer } from 'react'
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
    title: 'Example Diagram',
    description: 'This is a diagram...',
    board: {
      width: 13,
      height: 13,
      location: 'full'
    },
    positions: [
      {
        id: 1,
        caption: 'Example position...'
      }
    ]
  })

  return (
    <DiagrammerContext.Provider value={{ action, dispatchAction, diagram, dispatchDiagram }}>
      {children}
    </DiagrammerContext.Provider>
  )
}
