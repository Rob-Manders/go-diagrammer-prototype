import React from 'react'
import { DiagramObject } from '../../../lib/interfaces'
import GoBoard from '../../GoBoard'
import Toolbar from '../Toolbar'

export default function DiagramEditor({ diagram }: { diagram: DiagramObject }): JSX.Element {
  return (
    <div>
      <h2>Diagram Editor</h2>
      <Toolbar />
      <div style={{ width: '600px' }}>
        <GoBoard width={diagram.board.size.width} height={diagram.board.size.height} />
      </div>
    </div>
  )
}
