"use client"

import { useState } from "react";

export default function Home() {
  const[count,setCount]=useState(0);
  return (
   <div>
    Hi srijit {count}
    <br/>
    <button onClick={()=>{setCount(count+1)}}>Click me</button>
   </div>
  );
}
