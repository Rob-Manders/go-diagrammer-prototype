interface Coordinate {
  x: string
  y: string
}

interface Board {
  size: Coordinate
  location: string
}

interface Position {
  caption: string
  stones: {
    black: Coordinate[]
    white: Coordinate[]
  }
  labels: string[]
  symbols: string[]
}

export class Diagram {
  // id: number
  positions: Position[]

  constructor(title: string, description: string, board: Board) {}

  // Generate ID.
  // TODO: Refactor out into helper function?

  // Add position.

  // Remove position.

  // Adds stone.

  // Remove stone.

  // Add label.

  // Remove label.

  // Add symbol.

  // Remove symbol.
}
