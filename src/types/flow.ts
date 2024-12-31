export interface FlowNode {
    id: string;
    type?: string;
    data: Record<string, any>;
    position: {
        x: number;
        y: number;
    };
}

export interface FlowEdge {
    id: string;
    source: string;
    target: string;
    type?: string;
    label?: string;
}


export interface FlowState {
    nodes: FlowNode[]
    edges: FlowEdge []
}


export interface Goalplan {
    Title: string;
    CreatedAt: string;
    _id: string
    Content: FlowState;
    UserId: string,
}

export interface ResponseOnePlan {
    message:  string,
    data: Goalplan
}

export interface ResponseAll {
    message: string
    data: Goalplan[]
    length: number
}