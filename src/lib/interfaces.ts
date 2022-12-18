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
  space: number
}

export interface Symbol {
  symbol: string
  space: number
}

export interface Position {
  caption: string
  stones: {
    [index: string]: number[]
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
