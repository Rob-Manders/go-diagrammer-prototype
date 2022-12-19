import { Diagram, Action } from '../interfaces'

export default function useUpdateDiagram(state: Diagram, action: Action) {
  const { selectedAction, stoneColour, symbol, label, position, space, newDiagram } = action

  if (state === undefined) return undefined

  switch (selectedAction) {
    case 'create-new-diagram':
      return {
        ...state,
        initialised: true,
        title: newDiagram.title,
        description: newDiagram.description,
        board: newDiagram.board,
        postitions: newDiagram.positions
      }

    case 'add-stone':
      if (stoneColour === 'black' || stoneColour === 'white') {
        let positionToUpdate = state.positions[position]

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
      return {
        ...state
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
