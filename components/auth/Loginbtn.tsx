"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function Loginbtn() {
  const { data: session } = useSession()
  console.log(session)
  if(session) {
    return <>
      Hello! {session?.user?.email} <br/>
      <button className="bg-indigo-400 p-2 rounded" onClick={() => signOut()}>Sign out</button>
    </>
  }
  return <>
    <button className="bg-indigo-400 p-2 rounded" onClick={() => signIn("google")}>Sign in using Google</button> 
  </>
}