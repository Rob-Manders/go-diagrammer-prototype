import React from 'react'
import { DiagramObject } from '../../lib/diagrammer/interfaces'

export default function DiagramEditor({ diagram }: { diagram: DiagramObject }): JSX.Element {
  return (
    <div className='diagram'>
      <h2>Diagram</h2>
      <div className='toolbar'></div>
      <div className='board'></div>
    </div>
  )
}
