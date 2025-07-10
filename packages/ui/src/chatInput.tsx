interface ChatipProps{
  placeholder:string
}

export default function ChatInput({
  placeholder
}:ChatipProps){
  return( 
    <input placeholder={placeholder} className="absolute inset-x-15 size-430 bottom-7 h-10 rounded-xl border p-4 bg-white text-black"></input>
  )
}
