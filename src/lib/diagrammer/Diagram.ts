import { Board, Position, DiagramObject } from '../interfaces'

export default class Diagram<DiagramObject> {
  private defaultPosition: Position = {
    caption: '',
    stones: {
      black: [],
      white: []
    },
    labels: [],
    symbols: []
  }

  positions: Position[] = [this.defaultPosition]

  constructor(public title: string, public description: string, public board: Board) {}

  private validStoneColour(colour: string) {
    if (colour.toLowerCase() === 'black' || colour.toLowerCase() === 'white') {
      return true
    } else {
      return false
    }
  }

  private validSpace(id: number) {
    const boardSize = this.board.size.width * this.board.size.height

    if (id <= boardSize) return true

    return false
  }

  addPosition(caption: string = '') {
    const positionIndex = this.positions.length
    this.positions.push(this.defaultPosition)
    this.positions[positionIndex].caption = caption
  }

  removePosition(position: number) {
    this.positions.splice(position, 1)
  }

  addStone(position: number, colour: string, space: number) {
    if (this.validStoneColour(colour) && this.validSpace(space)) {
      this.positions[position].stones[colour].push(space)
    }
  }

  removeStone(position: number, colour: string, stoneIndex: number) {
    if (this.validStoneColour(colour)) {
      this.positions[position].stones[colour].splice(stoneIndex, 1)
    }
  }

  addlabel(position: number, label: string, space: number) {
    if (label.length === 1 && this.validSpace(space)) {
      this.positions[position].labels.push({ label, space })
    }
  }

  removeLabel(position: number, label: number) {
    this.positions[position].labels.splice(label, 1)
  }

  addSymbol(position: number, symbol: string, space: number) {
    if (this.validSpace(space)) {
      this.positions[position].symbols.push({ symbol, space })
    }
  }

  removeSymbol(position: number, symbol: number) {
    this.positions[position].symbols.splice(symbol, 1)
  }
}
