"use client"

import Input from "@repo/ui/input"
import Button from "@repo/ui/button"
import { useRef, useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export default function Page() {
  const roomIdRef=useRef<HTMLInputElement>(null);
  const router = useRouter()
  return (
  <div className="w-screen h-screen bg-black flex justify-center items-center">
    <Input reference={roomIdRef} placeholder="Enter Room ID"/>
    <div className="ml-2">
      <Button variant="room" placeholder="Send" onClick={()=>{
        const roomId=roomIdRef.current?.value
        if(roomId && roomId.trim()!=""){
          router.push("/chat/"+roomId)
        }
        else{
          alert("Please Enter Room ID")
        }
      }}/>
    </div>
    
  </div>)
}