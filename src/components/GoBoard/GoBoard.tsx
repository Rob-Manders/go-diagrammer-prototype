import React from 'react'
import { Coordinates } from '../../lib/interfaces'

export default function GoBoard({ width, height }: Coordinates): JSX.Element {
  let rows: JSX.Element[] = []
  let columns: JSX.Element[] = []

  console.log(rows)

  for (let i = 1; i <= width; i++) {
    columns.push(<td key={i}></td>)
  }

  for (let i = 1; i <= height; i++) {
    rows.push(<tr key={i}>{columns.map(row => row)}</tr>)
  }

  return (
    <div>
      <p>Width: {width}</p>
      <p>Height: {height}</p>
      <table>
        <tbody>{rows.map((row, index) => row)}</tbody>
      </table>
    </div>
  )
}
