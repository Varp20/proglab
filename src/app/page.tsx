"use client"

import { useState } from "react"

export default function Home() {

  const color:string[] = ["bg-blue-500", "bg-green-500", "bg-yellow-500"]
  const [index, setIndex] = useState<number>(0)

  const [digit, setDigit] = useState<number>(0)

  const increment=()=> {
    setDigit(digit+2)
  }

    const decrement=()=> {
    setDigit(digit-4)
  }
  const changeColor = () => {
    if (index < color.length) {
      setIndex(index +1)
    }
    else {
      setIndex(0)
    }
  }

  return (
    <div className={`mt-4 flex flex-col min-h-screen gap-2 items-center justify-center ${color[index]}`}>
    <h1 className="text-[30px]">Hi Earth</h1>
        <h1 className="text-[30px]">{digit}</h1>
      <div>
    <button className=" w-[100px] bg-cyan-400 hover:bg-blue-300 rounded-xl" onClick= {increment}>+</button>
    <button className="w-[100px] bg-cyan-400 hover:bg-blue-300 rounded-xl" onClick= {decrement}>-</button>
    </div>
    <button className="w-[120px] bg-yellow-400 hover:bg-red-300 rounded-xl" onClick= {changeColor}>Change Color</button>
    </div>
  );
}