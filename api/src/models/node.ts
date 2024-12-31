import mongoose, { Document } from "mongoose";

// Define a schema for Task
const taskSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Completed: { type: Boolean, default: false },
});

// Define a schema for Resources
const resourceSchema = new mongoose.Schema({
  Name: { type: String, required: true },
});

// Define the Node interface
interface Task extends Document {
  Name: string;
  Completed: boolean;
}

interface Resource extends Document {
  Name: string;
}

interface Node extends Document {
  Name: string;
  Description: string;
  DateStarted: Date;
  DateEnded: Date;
  NodeReference: string
  TaskContainer: Task[];
  Resources: Resource[];
}

// Define the Node schema
const nodeSchema = new mongoose.Schema<Node>({
  Name: {
    type: String,
    default  : ' Untitled Node name'
  },
  Description: {
    type: String,
    default: "Description of the node",
  },
  DateStarted: {
    type: Date,
    default: Date.now
  },
  DateEnded: {
    type: Date,
  },
  NodeReference:{
    type: String,
    requried: true
  },
  TaskContainer: [taskSchema], 
  Resources: [resourceSchema],
});

// Create and export the model
const Node = mongoose.model<Node>("Node", nodeSchema);
export default Node;
