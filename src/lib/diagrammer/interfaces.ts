export interface Coordinates {
  x: number
  y: number
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
  id: string
  title: string
  description: string
  positions: Position[]
}
