import React from 'react'
import { DiagramObject } from '../../../lib/interfaces'
import DiagrammerContextProvider from '../DiagrammerContext'
import GoBoard from '../GoBoard'
import Toolbar from '../Toolbar'

export default function DiagramEditor({ diagram }: { diagram: DiagramObject }): JSX.Element {
  return (
    <DiagrammerContextProvider>
      <div>
        <h2>Diagram Editor</h2>
        <Toolbar />
        <GoBoard width={diagram.board.size.width} height={diagram.board.size.height} />
      </div>
    </DiagrammerContextProvider>
  )
}
