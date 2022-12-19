import React, { useContext } from 'react'
import styled from 'styled-components'
import { DiagrammerContext } from '../../context/DiagrammerContext'

const ToolbarContainer = styled.div`
  margin-bottom: 1rem;
`

export default function Toolbar(): JSX.Element {
  const { action, dispatchAction } = useContext(DiagrammerContext)

  return (
    <ToolbarContainer>
      <button onClick={() => dispatchAction({ selectedAction: 'add-stone', stoneColour: 'black' })}>Black</button>
      <button onClick={() => dispatchAction({ selectedAction: 'add-stone', stoneColour: 'white' })}>White</button>
      <button onClick={() => dispatchAction({ selectedAction: 'remove-stone' })}>Remove Stone</button>
    </ToolbarContainer>
  )
}
