import React, {useReducer} from 'react'
import FirstLevel from './FirstLevel'

export const CountContext = React.createContext()

const initialCount = 0

const countReducer = (state, action) => {
  switch(action) {
    case 'decrease': 
      return state - 1
    case 'increase':
      return state + 1
    case 'reset':
      return initialCount
    default: 
      return state
  }
}

function RootLevel() {

  const [count, countDispatch] = useReducer(countReducer, initialCount)

  return (
    <CountContext.Provider value={{ count, countDispatch }}>
      <h3>Reducer Plus Context</h3>
      <FirstLevel></FirstLevel>
    </CountContext.Provider>
  )
}

export default RootLevel
