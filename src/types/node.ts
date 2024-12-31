
interface Task {
    _id: string
    Name: string,
    Completed: boolean
}

interface Resource {
    _id: string
    Name: string
}


export interface Node {
    Name: string,
    Description: string,
    NodeReference: string,
    _id: string, 
    DateStarted: string
    DateEnded?: string
    TaskContainer: Task[]
    Resources: Resource[]
}

export interface NodeResponse {
    message: string,
    data: Node
    
}