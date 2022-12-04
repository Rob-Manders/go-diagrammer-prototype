import React from 'react'
import { DiagramObject } from '../../../lib/interfaces'
import GoBoard from '../../GoBoard/GoBoard'

export default function DiagramEditor({ diagram }: { diagram: DiagramObject }): JSX.Element {
  return (
    <div>
      <h2>Diagram Editor</h2>
      <GoBoard width={diagram.board.size.width} height={diagram.board.size.height} />
    </div>
  )
}
