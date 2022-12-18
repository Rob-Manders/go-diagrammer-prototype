import React, { useContext } from 'react'
import styled from 'styled-components'
import { DiagrammerContext } from '../DiagrammerContext'

const SpaceDiv = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  aspect-ratio: 1 / 1;
  background-color: #0f3963;
`

export default function Space({ id }: { id: number }): JSX.Element {
  const {} = useContext(DiagrammerContext)

  return <SpaceDiv>{id}</SpaceDiv>
}
