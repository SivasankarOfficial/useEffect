
import { useState,useEffect  } from 'react'

export default function App() {
    const [counter1,setCounter1]=useState(0);
    const [counter2,setCounter2]=useState(0)
//Type1:Execute On Render and All State changes
    // useEffect(()=>
    // console.log("Use Effect Executing")
    // )
// Type2:Execute On Render and All dependancy State changes
// useEffect(()=>(
//     console.log("Use Effect Executing")
// ),[counter2]
// Type3:Execute on render
useEffect(()=>(
    console.log("Use Effect Executing")
),[]

)

    

  return (
    <div>
        <h2>{counter1}</h2>
        <h2>{counter2}</h2>
        <button onClick={()=>setCounter1(counter1+1)}>increament1</button>
        <button onClick={()=>setCounter2(counter2+1)}>increament1</button>


    </div>
  )
}
