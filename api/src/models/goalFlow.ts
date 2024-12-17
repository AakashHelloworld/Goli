import mongoose, { Document } from "mongoose";

interface FlowNode {
    id: string;
    type?: string;
    data: Record<string, any>;
    position: {
        x: number;
        y: number;
    };
}

interface FlowEdge {
    id: string;
    source: string;
    target: string;
    type?: string;
    label?: string;
}

// Define the Goalplan interface
interface Goalplan extends Document {
    Title: string;
    CreatedAt: Date;
    Content: {
        nodes: FlowNode[];
        edges: FlowEdge[];
    };
    UserId: mongoose.Types.ObjectId;
}

// Define the schema
const planSchema = new mongoose.Schema<Goalplan>({
    Title: {
        type: String,
        default: 'Untitled',
    },
    CreatedAt: {
        type: Date,
        default: Date.now,
    },
    Content: {
        nodes: {
            type: [
                {
                    id: { type: String, required: true },
                    type: { type: String },
                    data: { type: mongoose.Schema.Types.Mixed, required: true },
                    position: {
                        x: { type: Number, required: true },
                        y: { type: Number, required: true },
                    },
                },
            ],
            default: [],
        },
        edges: {
            type: [
                {
                    id: { type: String, required: true },
                    source: { type: String, required: true },
                    target: { type: String, required: true },
                    type: { type: String },
                    label: { type: String },
                },
            ],
            default: [],
        },
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

// Create and export the model
const GoalPlan = mongoose.model<Goalplan>('Goalplan', planSchema);
export default GoalPlan;
