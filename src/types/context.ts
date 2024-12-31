import {Node} from "./node"


export interface NodeContext {
    state?: {
        nodes: Node[],
        currentnode: Node
    };
    dispatch?: (value: { type: 'SET_ALL_NODES' | 'SELECT_NODE' | 'ADD_NODE' | 'UPDATE_NODE', payload: any }) =>  void;

}