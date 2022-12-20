import React, { useContext, useState } from 'react'
import { DiagrammerContext } from '../../context/DiagrammerContext'
import { SpaceContainer } from './SpaceContainer'
import { Stone } from './Stone'

export default function Space({ id }: { id: number }): JSX.Element {
  const { action, diagram, dispatchDiagram, position } = useContext(DiagrammerContext)
  const { stone, symbol, label } = diagram.positions[position].spaces[id]

  function updateSpace() {
    dispatchDiagram({
      ...action,
      position,
      space: id
    })
  }

  return (
    <SpaceContainer onClick={updateSpace} className={`${!stone && 'empty'}`}>
      {stone && <Stone className={`stone ${stone}`} />}
    </SpaceContainer>
  )
}
