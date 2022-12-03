import { Coordinates, Board, Position } from './interfaces'

const defaultPosition: Position = {
  caption: '',
  stones: {
    black: [],
    white: []
  },
  labels: [],
  symbols: []
}

export class Diagram {
  id: string = this.generateID(12)
  positions: Position[] = [defaultPosition]

  constructor(public title: string, public description: string, public board: Board) {}

  private generateID(length: number) {
    // TODO: Refactor out into helper function?
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz'
    let id = ''
    for (let i = length; i > 0; --i) {
      id += chars[Math.floor(Math.random() * chars.length)]
    }
    return id
  }

  private validStoneColour(colour: string) {
    if (colour.toLowerCase() === 'black' || colour.toLowerCase() === 'white') {
      return true
    } else {
      return false
    }
  }

  private validcoordinates(coordinates: Coordinates) {
    const boardSize = this.board.size

    if (coordinates.x <= boardSize.x && coordinates.y <= boardSize.y) {
      return true
    } else {
      return false
    }
  }

  addPosition(caption: string = '') {
    const positionIndex = this.positions.length
    this.positions.push(defaultPosition)
    this.positions[positionIndex].caption = caption
  }

  removePosition(position: number) {
    this.positions.splice(position, 1)
  }

  addStone(position: number, colour: string, coordinates: Coordinates) {
    if (this.validStoneColour(colour) && this.validcoordinates(coordinates)) {
      this.positions[position].stones[colour].push(coordinates)
    }
  }

  removeStone(position: number, colour: string, stoneIndex: number) {
    if (this.validStoneColour(colour)) {
      this.positions[position].stones[colour].splice(stoneIndex, 1)
    }
  }

  addlabel(position: number, label: string, coordinates: Coordinates) {
    if (label.length === 1 && this.validcoordinates(coordinates)) {
      this.positions[position].labels.push({ label, coordinates })
    }
  }

  // Remove label.
  removeLabel(position: number, label: number) {
    this.positions[position].labels.splice(label, 1)
  }

  // Add symbol.
  addSymbol(position: number, symbol: string, coordinates: Coordinates) {
    if (this.validcoordinates(coordinates)) {
      this.positions[position].symbols.push({ symbol, coordinates })
    }
  }

  // Remove symbol.
  removeSymbol(position: number, symbol: number) {
    this.positions[position].symbols.splice(symbol, 1)
  }
}
