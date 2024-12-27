import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sign } from "crypto";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";


export default function Home() {
  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
      <Tabs defaultValue="signup" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="signup">Signup</TabsTrigger>
        <TabsTrigger value="signin">Signin</TabsTrigger>
      </TabsList>
      <TabsContent value="signup">
        {/* //signup form */}
        <Signup />
      </TabsContent>
      <TabsContent value="signin">
        {/* //signin form */}
        <Signin />
      </TabsContent>
    </Tabs>
    </div>
  );
}
