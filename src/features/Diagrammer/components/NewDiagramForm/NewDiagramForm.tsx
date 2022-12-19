import React, { useContext, useState, FormEvent, FormEventHandler } from 'react'
import styled from 'styled-components'
import { DiagrammerContext } from '../../context/DiagrammerContext'
import { Space } from '../../interfaces'

const FormContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;

    label,
    button {
      margin-top: 1rem;
    }
  }
`

export default function NewDiagramForm(): JSX.Element {
  const { dispatchDiagram } = useContext(DiagrammerContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [width, setWidth] = useState<number>(13)
  const [height, setHeight] = useState<number>(13)

  function createDiagram(event: FormEvent) {
    event.preventDefault()

    const spaces: Space[] = []

    for (let i = 0; i < width * height; i++) {
      spaces.push({
        id: i,
        stone: undefined,
        symbol: undefined,
        label: undefined
      })
    }

    dispatchDiagram({
      selectedAction: 'create-new-diagram',
      newDiagram: {
        title,
        description,
        board: {
          width,
          height,
          location: 'full'
        },
        positions: [{ caption: '', spaces }]
      }
    })
  }

  return (
    <FormContainer>
      <h3>Create New Diagram</h3>
      <form onSubmit={createDiagram}>
        <label>Title</label>
        <input type='text' value={title} onChange={event => setTitle(event.target.value)} />

        <label>Description</label>
        <input type='text' value={description} onChange={event => setDescription(event.target.value)} />

        <label>Width</label>
        <input type='text' value={width} onChange={event => setWidth(Number(event.target.value))} />

        <label>Height</label>
        <input type='text' value={height} onChange={event => setHeight(Number(event.target.value))} />

        <button type='submit'>Create Diagram</button>
      </form>
    </FormContainer>
  )
}
