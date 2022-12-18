export interface Board {
  width: string
  height: string
  location: string
}

export interface Space {
  id: number
  stone?: string | undefined
  symbol?: string | undefined
  label?: string | undefined
}

export interface Position {
  caption: string
  spaces: Space[]
}

export interface Diagram {
  title: string
  description: string
  board: Board
  positions: Position[]
}

export interface SelectedAction {
  selectedAction: string
  stoneColour?: string | undefined
  symbol?: string | undefined
  label?: string | undefined
}
