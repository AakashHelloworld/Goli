"use client";
import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = createContext({});

interface InitialState {
  userdata: {
    id: string
    username: string;
    email: string;
    profilePic: string
    role: string
};
}

const initialState: InitialState = {
  userdata:{
          id: '',
          username: '',
          email: '',
          profilePic: '',
          role: ''
        },
};

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
