import { SelectedAction } from '../interfaces'

export default function useSetAction(state: SelectedAction, action: SelectedAction) {
  const { selectedAction, stoneColour, symbol, label } = action

  switch (selectedAction) {
    case 'add-stone':
      if (stoneColour === 'black' || stoneColour === 'white') {
        return {
          ...state,
          selectedAction,
          stoneColour
        }
      }
      return { action: 'none', ...state }

    case 'remove-stone':
      return {
        ...state,
        selectedAction
      }

    case 'add-symbol':
      if (symbol) {
        return {
          ...state,
          selectedAction,
          symbol
        }
      }
      return { ...state, selectedAction: 'none' }

    case 'remove-symbol':
      return {
        ...state,
        selectedAction
      }

    case 'add-label':
      if (label.length <= 2 && label.length > 0) {
        return {
          ...state,
          selectedAction,
          label: label.toUpperCase()
        }
      }
      return { ...state, selectedAction: 'none' }

    case 'remove-label':
      return {
        ...state,
        selectedAction
      }

    case 'none':
      return {
        ...state,
        selectedAction: 'none'
      }

    default:
      return {
        ...state,
        selectedAction: 'none'
      }
  }
}
