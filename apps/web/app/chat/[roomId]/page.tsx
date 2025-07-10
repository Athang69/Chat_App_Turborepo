"use client"
import Button from "@repo/ui/button";
import ChatInput from "@repo/ui/chatInput";
import ChatBubble from "@repo/ui/chat_bubble"

export default function(){
  return <div className="bg-black">
    <ChatInput placeholder="Enter message" />
    <Button placeholder="Send" variant="chat" onClick={()=>{
    }}/>
    <ChatBubble initiator="sender" text="Hii There" />
    <ChatBubble initiator="reciever" text="Hello" />
    <ChatBubble initiator="sender" text="How are you" />
    <ChatBubble initiator="reciever" text="I am fine what about u?" />
  </div>
}