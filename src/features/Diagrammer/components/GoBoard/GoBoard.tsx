import React, { useContext } from 'react'
import styled from 'styled-components'
import { DiagrammerContext } from '../../context/DiagrammerContext'
import NewDiagramForm from '../NewDiagramForm'
import Space from '../Space'

const Board = styled.div`
  display: grid;
  background-color: #7e531b;
  margin: 0 auto;
`

export default function GoBoard(): JSX.Element {
  const { diagram } = useContext(DiagrammerContext)

  if (diagram.initialised === false) return <NewDiagramForm />

  const { width, height, location } = diagram.board

  let spaces: JSX.Element[] = []
  for (let i = 0; i < width * height; i++) {
    spaces.push(<Space key={i} id={i} />)
  }

  return (
    <Board
      style={{
        gridTemplateRows: `repeat(${width}, 1fr)`,
        gridTemplateColumns: `repeat(${height}, 1fr)`
      }}
    >
      {spaces.map(space => space)}
    </Board>
  )
}
