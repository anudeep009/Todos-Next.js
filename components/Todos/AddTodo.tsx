"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

function AddTodo() {
  return (
    <div className="flex space-x-4 mb-4">
        <Input placeholder="Enter a Todo"/>
        <Button className="bg-indigo-400 hover:bg-indigo-500">Add Todo</Button>
    </div>
  )
}

export default AddTodo