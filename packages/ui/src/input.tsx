import { ReactNode, RefObject } from "react"

interface InputProps{
  placeholder:string,
  reference?:React.RefObject<HTMLInputElement | null>,
}

export default function Input({
  placeholder,
  reference,
}: InputProps
){
  return(
    <input ref={reference} className="bg-white text-black border rounded-xl p-2" placeholder={placeholder}>
    </input>
  )
}