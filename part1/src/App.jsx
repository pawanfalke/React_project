import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const buttonclick1=()=>{
    setCount(count+1)
  }
  const buttonclick2=()=>{
    setCount(count-1)
  }
  const buttonclick3=()=>{
    setCount(0)
  }

  return (
    <>
      <div>
        <button onClick={buttonclick1}>
         Increment
        </button>
        <button onClick={buttonclick2}>
        Decrement
        </button>
        <button onClick={buttonclick3}>
         Zero
        </button>
        <p>
          Count is:{count}
        </p>
      </div>
      
    </>
  )
}

export default App
