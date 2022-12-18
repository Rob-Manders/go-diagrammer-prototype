import React, { useContext } from 'react'
import { DiagrammerContext } from '../../context/DiagrammerContext'

export default function Toolbar(): JSX.Element {
  const { action, dispatchAction } = useContext(DiagrammerContext)

  return <div>Toolbar</div>
}
