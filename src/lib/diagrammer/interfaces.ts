export interface Coordinates {
  x: string
  y: string
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
