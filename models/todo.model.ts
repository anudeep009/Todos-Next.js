import mongoose, { Document, Schema } from "mongoose";

interface ITodo extends Document{
    todo : string;
    isCompleted : boolean;
}

const todoSchema: Schema = new mongoose.Schema({
    todo : {
        type : String,
        required : true,
        trim : true,
    },
    isCompleted : {
        type : Boolean,
        required : true,
        default : false,
    },
},{
    timestamps : true
})

const Todo = mongoose.model<ITodo>("Todo",todoSchema)

export default Todo;