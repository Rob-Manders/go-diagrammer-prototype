import React from 'react'
import Diagram from '../../lib/diagrammer/Diagram'
import DiagramEditor from './DiagramEditor/DiagramEditor'

export default function Diagrammer(): JSX.Element {
  let diagram = new Diagram('Diagram', 'Diagram description...', {
    size: { width: 13, height: 13 },
    location: 'full'
  })

  return (
    <>
      <h1>Diagrammer</h1>
      <DiagramEditor diagram={diagram} />
    </>
  )
}
