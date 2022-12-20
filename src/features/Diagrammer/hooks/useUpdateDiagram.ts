import { Diagram, Action } from '../interfaces'

export default function useUpdateDiagram(state: Diagram, action: Action) {
  const { selectedAction, stoneColour, symbol, label, position, space, newDiagram } = action

  if (state === undefined) return undefined

  let positionToUpdate = state.positions[position]

  switch (selectedAction) {
    case 'create-new-diagram':
      return {
        ...state,
        initialised: true,
        title: newDiagram.title,
        description: newDiagram.description,
        board: newDiagram.board,
        positions: newDiagram.positions
      }

    case 'add-stone':
      if (stoneColour === 'black' || stoneColour === 'white') {
        positionToUpdate.spaces[space] = {
          ...positionToUpdate.spaces[space],
          id: space,
          stone: stoneColour
        }

        return {
          ...state,
          positions: [positionToUpdate, ...state.positions]
        }
      }
      return { ...state }

    case 'remove-stone':
      positionToUpdate.spaces[space] = {
        ...positionToUpdate.spaces[space],
        id: space,
        stone: undefined
      }
      return {
        ...state,
        positions: [positionToUpdate, ...state.positions]
      }

    case 'add-symbol':
      if (symbol) {
        return {
          ...state
        }
      }
      return { ...state }

    case 'remove-symbol':
      return {
        ...state
      }

    case 'add-label':
      if (label.length === 1) {
        return {
          ...state
        }
      }
      return { ...state }

    case 'remove-label':
      return {
        ...state
      }

    case 'none':
      return {
        ...state
      }

    default:
      return {
        ...state
      }
  }
}
