import React, { useContext } from 'react'
import { DiagrammerContext } from '../../context/DiagrammerContext'
import GoBoard from '../GoBoard'
import Toolbar from '../Toolbar'

export default function DiagramEditor(): JSX.Element {
  const {} = useContext(DiagrammerContext)

  return (
    <div>
      <h2>Diagram Editor</h2>
      <Toolbar />
      <GoBoard />
    </div>
  )
}
