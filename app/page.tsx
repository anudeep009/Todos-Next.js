import { Todos } from "@/components/Todos/Todos";

export default function Home() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
      <Todos />
    </div>
  );
}
