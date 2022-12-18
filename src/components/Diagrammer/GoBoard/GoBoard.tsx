import React from 'react'
import styled from 'styled-components'
import Space from '../Space'

interface Props {
  width: number
  height: number
}

const Board = styled.div`
  display: grid;
  margin: 0 auto;
`

export default function GoBoard({ width, height }: Props): JSX.Element {
  let spaces: JSX.Element[] = []

  for (let i = 1; i <= width * height; i++) {
    spaces.push(<Space id={i} />)
  }

  return (
    <Board style={{ gridTemplateRows: `repeat(${width}, 1fr)`, gridTemplateColumns: `repeat(${height}, 1fr)` }}>
      {spaces.map(space => space)}
    </Board>
  )
}
