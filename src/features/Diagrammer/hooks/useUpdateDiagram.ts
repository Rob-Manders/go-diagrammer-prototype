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
          positions: [positionToUpdate]
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
        positions: [positionToUpdate]
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
      if (label.length <= 2 && label.length > 0) {
        positionToUpdate.spaces[space] = {
          ...positionToUpdate.spaces[space],
          id: space,
          symbol: undefined,
          label
        }

        return {
          ...state,
          positions: [positionToUpdate]
        }
      }
      return { ...state }

    case 'remove-label':
      positionToUpdate.spaces[space] = {
        ...positionToUpdate.spaces[space],
        id: space,
        label: undefined
      }
      return {
        ...state,
        positions: [positionToUpdate]
      }

    default:
      return {
        ...state
      }
  }
}
