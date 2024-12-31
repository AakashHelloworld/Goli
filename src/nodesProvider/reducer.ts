const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_ALL_NODES':
            const nodeDetails = action.payload;
            return {
                ...state,
                nodes: [...nodeDetails]
            };
        case 'SELECT_NODE':
            const node = action.payload;
            return {
                ...state,
                currentnode: node
            };
        case 'ADD_NODE':
            const newNode = action.payload;
            return {
                ...state,
                nodes: [...state.nodes, newNode]
            };

        case 'UPDATE_NODE':
            const newnode = action.payload;
            const updatedNodes = state.nodes.map((node: any) => {
                if (node.NodeReference === newnode.NodeReference) {
                    return newnode;
                }else{
                    return node;
                }
            });

            const currentnode = state.currentnode?.NodeReference === newnode.NodeReference ? newnode : state.currentnode;

            return {
                ...state,
                nodes: updatedNodes,
                currentnode
            };
        default:
            return state; // Return the current state by default
    }
};
export default reducer;