import React, {useState} from 'react'

export default function HookCounterPreviousState() {

  const initialValue = 0
  const [count, setCount] = useState(initialValue)

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }

  return (
    <div>
      count {count}
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrease</button>
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}
