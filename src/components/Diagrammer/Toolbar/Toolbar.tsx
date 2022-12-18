import React, { useContext } from 'react'
import { DiagrammerContext } from '../DiagrammerContext'

export default function Toolbar(): JSX.Element {
  const { action, dispatchAction } = useContext(DiagrammerContext)

  return <div>Toolbar</div>
}
