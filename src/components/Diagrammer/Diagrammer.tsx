import React from 'react'
import Diagram from '../../lib/diagrammer/Diagram'

export default function Diagrammer(): JSX.Element {
  return (
    <div>
      <h1>Go Diagrammer</h1>
      <p>The Prototype</p>

      <div className='diagram'>
        <div className='toolbar'></div>
        <div className='board'></div>
      </div>
    </div>
  )
}
