import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "../ui/checkbox"
import AddTodo from "./AddTodo"
import { Toaster } from "sonner"

const todos = [
  {
    id : 1,
    todo: "Buy groceries",
    status: "Pending",
    isDone : false
  },
  {
    id : 2,
    todo: "Buy groceries",
    status: "Pending",
    isDone : false
  },
  {
    id : 3,
    todo: "Buy groceries",
    status: "Pending",
    isDone : false
  },
  {
    id : 4,
    todo: "Buy groceries",
    status: "Pending",
    isDone : false
  },
  {
    id : 5,
    todo: "Buy groceries",
    status: "Pending",
    isDone : false
  },
]

export function Todos() {
  return (
    <div>
    <div>
      <AddTodo />
    </div>
    <div>
      <Table>
      <TableCaption>A list of your Todos</TableCaption>
      <TableHeader>
        <TableRow >
          <TableHead className="w-[100px]">CheckBox</TableHead>
          <TableHead>Todo</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{<Checkbox className="bg-white border-green" />}</TableCell>
            <TableCell>{todo.todo}</TableCell>
            <TableCell>{todo.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
    <Toaster />
    </div>
  )
}
