import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const AuthContext = createContext({});

interface Node {
  Name: string,
  Description: string,
  NodeReference: string,
  _id: string, 
  TaskContainer: any[]
  Resources: any[]
  DateStarted: string
  DateEnded?: string
}


interface InitialState {
  userdata: {
    id: string
    username: string;
    email: string;
    profilePic: string
    role: string
};
currentnode: Node | null
}

const initialState: InitialState = {
  userdata:{
          id: '',
          username: '',
          email: '',
          profilePic: '',
          role: ''
        },
  currentnode:null
};

const AuthenticationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthGlobal = () => {
  return useContext(AuthContext);
};

export { useAuthGlobal ,AuthenticationProvider };
