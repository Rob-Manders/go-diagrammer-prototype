import React from 'react'
import { DiagramObject } from '../../lib/diagrammer/interfaces'

export default function DiagramEditor({ diagram }: { diagram: DiagramObject }): JSX.Element {
  return (
    <div className='diagram'>
      <h2>Diagram {diagram.title}</h2>
      <p>{diagram.description}</p>

      <div className='toolbar'></div>
      <div className='board'></div>

      <p>{diagram.id}</p>
    </div>
  )
}
