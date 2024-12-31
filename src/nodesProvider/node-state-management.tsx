import React, { createContext, useContext, useReducer } from "react";
import reducer from './reducer';

const NodeContext = createContext({});

interface Node {
  Name: string,
  DescriptNodeReferenceion: string,
  NodeReference: string,
  _id: string, 
  TaskContainer: any[]
  Resources: any[]
  DateStarted: string
  DateEnded?: string
}

interface InitialState {
  currentnode: Node | null
  nodes: Node[] | []
}


let initialState: InitialState = {
  currentnode: null,
  nodes: []
};

const NodeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NodeContext.Provider value={{ state, dispatch }}>
      {children}
    </NodeContext.Provider>
  );
};


const useNodeGlobal = () => {
  return useContext(NodeContext);
};

export { useNodeGlobal, NodeProvider };