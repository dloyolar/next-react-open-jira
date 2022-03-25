import { UIState } from './';

type UIActionType =
  | { type: 'UI - Open Sidebar' }
  | { type: 'UI - Close Sidebar' }
  | { type: 'UI - Set Add Entry'; payload: boolean }
  | { type: 'UI - Start Dragging' }
  | { type: 'UI - Stop Dragging' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI - Open Sidebar':
      return { ...state, sidemenuOpen: true };
    case 'UI - Close Sidebar':
      return { ...state, sidemenuOpen: false };
    case 'UI - Set Add Entry':
      return { ...state, isAddingEntry: action.payload };
    case 'UI - Start Dragging':
      return { ...state, isDragging: true };
    case 'UI - Stop Dragging':
      return { ...state, isDragging: false };
    default:
      return state;
  }
};
