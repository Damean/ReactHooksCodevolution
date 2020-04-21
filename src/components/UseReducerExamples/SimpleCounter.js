import React, {useReducer} from 'react'

const initialCountState = 0
const countReducer = (state, action) => {
  switch (action) {
    case 'decrement':
      return state - 1
    case 'reset':
      return initialCountState
    case 'increment': 
      return state + 1
    default:
      return state
  }
}

function SimpleCounter() {

  const [count, countDispatch] = useReducer(countReducer, initialCountState)

  return (
    <div>
      <h3>Simple Reducer</h3>
      <p>Counter value: {count}</p>
      <button onClick={() => countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
      <button onClick={() => countDispatch('increment')}>Increment</button>
    </div>
  )
}

export default SimpleCounter
