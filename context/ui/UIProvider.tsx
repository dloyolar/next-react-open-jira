import { FC, useReducer, createContext } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => dispatch({ type: 'UI - Open Sidebar' });

  const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' });

  const setIsAddingEntry = (isAdding: boolean) =>
    dispatch({ type: 'UI - Set Add Entry', payload: isAdding });

  const startDragging = () => dispatch({ type: 'UI - Start Dragging' });

  const stopDragging = () => dispatch({ type: 'UI - Stop Dragging' });

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,

        setIsAddingEntry,

        startDragging,
        stopDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
