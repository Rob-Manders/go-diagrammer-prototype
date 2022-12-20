import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { DiagrammerContext } from '../../context/DiagrammerContext'

const ToolbarContainer = styled.div`
  margin-bottom: 1rem;
`

export default function Toolbar(): JSX.Element {
  const { action, dispatchAction } = useContext(DiagrammerContext)
  const [label, setLabel] = useState('')

  return (
    <ToolbarContainer>
      <button onClick={() => dispatchAction({ selectedAction: 'add-stone', stoneColour: 'black' })}>Black</button>
      <button onClick={() => dispatchAction({ selectedAction: 'add-stone', stoneColour: 'white' })}>White</button>
      <button onClick={() => dispatchAction({ selectedAction: 'remove-stone' })}>Remove Stone</button>

      <br />

      <input type='text' placeholder='Label' value={label} onChange={event => setLabel(event.target.value)} />
      <button onClick={() => dispatchAction({ selectedAction: 'add-label', label })}>Add Label</button>
      <button onClick={() => dispatchAction({ selectedAction: 'remove-label' })}>Remove Label</button>
    </ToolbarContainer>
  )
}
