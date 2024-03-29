import React, { createContext,  useContext,  useReducer } from 'react'

// Prepare data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext (StateContext); //allows to pull information from data layer


