export interface Coordinates {
  width: number
  height: number
}

export interface Board {
  size: Coordinates
  location: string
}

export interface Label {
  label: string
  coordinates: Coordinates
}

export interface Symbol {
  symbol: string
  coordinates: Coordinates
}

export interface Position {
  caption: string
  stones: {
    [index: string]: Coordinates[]
  }
  labels: Label[]
  symbols: Symbol[]
}

export interface DiagramObject {
  title: string
  description: string
  board: Board
  positions: Position[]
}
