import React, { FormEvent, useState } from 'react'
import Diagram from '../../lib/diagrammer/Diagram'
import { DiagramObject } from '../../lib/diagrammer/interfaces'
import { generateID } from '../../lib/generateID'
import DiagramEditor from './DiagramEditor'

export default function Diagrammer(): JSX.Element {
  const [diagram, setDiagram] = useState<DiagramObject | undefined>()

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [xCoord, setXCoord] = useState<number>()
  const [yCoord, setYCoord] = useState<number>()

  function createNewDiagram(event: FormEvent) {
    event.preventDefault()

    setDiagram(
      new Diagram(generateID(12), title, description, {
        size: { x: xCoord, y: yCoord },
        location: 'full'
      })
    )
  }

  return (
    <div>
      <h1>Go Diagrammer</h1>
      <p>The Ugly Prototype</p>
      <br />

      {/* New Diagram Form */}
      <form onSubmit={createNewDiagram}>
        <label>Title</label>
        <input type='text' onChange={event => setTitle(event.target.value)} />

        <br />

        <label>Description</label>
        <input type='text' onChange={event => setDescription(event.target.value)} />

        <br />

        <label>X</label>
        <input type='text' onChange={event => setXCoord(Number(event.target.value))} />

        <br />

        <label>Y</label>
        <input type='text' onChange={event => setYCoord(Number(event.target.value))} />

        <button type='submit'>Create New Diagram</button>
      </form>

      {diagram && <DiagramEditor diagram={diagram} />}
    </div>
  )
}
