import mongoose, { Document } from "mongoose";



const nodeSchema = new mongoose.Schema({
    Name:{
        type: String,
        default: "Node Name",
    },
    Description:{
        type: String,
        default: "Description of the node name",
    },
    Date:{
        type: Date,
        default: Date()
    },
    


})