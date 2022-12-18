import React from 'react'
import DiagramEditor from './components/DiagramEditor'
import DiagrammerContextProvider from './context/DiagrammerContext'

export default function Diagrammer(): JSX.Element {
  return (
    <DiagrammerContextProvider>
      <DiagramEditor />
    </DiagrammerContextProvider>
  )
}
