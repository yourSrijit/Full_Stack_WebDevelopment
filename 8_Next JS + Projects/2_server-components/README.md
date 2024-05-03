# Server Side Compoents
By default everything in next js is server components.
To make a server components into client to need to write `use client `. Cant use Hooks in server side
Even when we consol anything it will print in server side bt default.



```
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
```
Even suppose we need a components that only client components we can use that component into another server components. 