interface ButtonProps{
  placeholder:string,
  onClick?:()=>void,
  variant:"chat" | "room"
}

export default function Button({
  placeholder,
  onClick,
  variant,
}:ButtonProps
){
  return variant==="room"?(
    <button 
      className="p-2 bg-white text-black border rounded-xl cursor-pointer" 
      onClick={onClick}
    >
      {placeholder}
    </button>
    ):(
  <button 
    className="p-2 bg-white text-black border rounded-xl cursor-pointer absolute inset-x-15 bottom-7 w-15 start-450 " 
    onClick={onClick}
  >
    {placeholder}
  </button>
  )
  
}