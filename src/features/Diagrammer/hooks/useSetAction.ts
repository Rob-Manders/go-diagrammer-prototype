import { SelectedAction } from '../interfaces'

export default function useSetAction(state: SelectedAction, action: SelectedAction) {
  const { selectedAction, stoneColour, symbol, label } = action

  switch (selectedAction) {
    case 'add-stone':
      if (stoneColour === 'black' || stoneColour === 'white') {
        return {
          selectedAction,
          stoneColour,
          ...state
        }
      }
      return { action: 'none', ...state }

    case 'remove-stone':
      return {
        selectedAction,
        ...state
      }

    case 'add-symbol':
      if (symbol) {
        return {
          selectedAction,
          symbol,
          ...state
        }
      }
      return { selectedAction: 'none', ...state }

    case 'remove-symbol':
      return {
        selectedAction,
        ...state
      }

    case 'add-label':
      if (label.length === 1) {
        return {
          selectedAction,
          label: label.toUpperCase(),
          ...state
        }
      }
      return { selectedAction: 'none', ...state }

    case 'remove-label':
      return {
        selectedAction,
        ...state
      }

    case 'none':
      return {
        selectedAction: 'none',
        ...state
      }

    default:
      return {
        selectedAction: 'none',
        ...state
      }
  }
}
