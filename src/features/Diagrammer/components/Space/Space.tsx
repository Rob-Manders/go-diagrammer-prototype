import React, { useContext } from 'react'
import styled from 'styled-components'
import { DiagrammerContext } from '../../context/DiagrammerContext'

const SpaceDiv = styled.div`
  display: grid;
  place-items: center;
  color: #000;
  height: 100%;
  aspect-ratio: 1 / 1;
  cursor: pointer;

  &:hover {
    color: #fff;
    transition: color 150ms ease-in-out;
  }
`

export default function Space({ id }: { id: number }): JSX.Element {
  const { action, diagram, dispatchDiagram } = useContext(DiagrammerContext)

  return <SpaceDiv onClick={() => console.log(id)}>{id}</SpaceDiv>
}
