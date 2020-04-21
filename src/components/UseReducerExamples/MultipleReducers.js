import React, {useReducer} from 'react'

const initialCount = 0

const countReducer = (state, action) => {
  switch(action.type) {
    case 'increase': 
      return state + action.value
    case 'decrease':
      return state - action.value
    case 'reset':
      return initialCount
    default:
      return state
  }
}

function MultipleReducers() {

  const [countOne, countOneDispatcher] = useReducer(countReducer, initialCount)
  const [countTwo, countTwoDispatcher] = useReducer(countReducer, initialCount)

  return (
    <div>
      <h3>Multiple Reducers</h3>
      <p>Counter One: {countOne}</p>
      <p>Counter Two: {countTwo}</p>
      <div>
        <button onClick={ () => countOneDispatcher({ type: 'decrease', value: 1 }) } >Decrease By One</button>
        <button onClick={ () => countOneDispatcher({ type: 'increase', value: 1 }) }>Increase By One</button>
      </div>
      <div>
        <button onClick={ () => countTwoDispatcher({ type: 'decrease', value: 2 }) }>Decrease By Two</button>
        <button onClick={ () => countTwoDispatcher({ type: 'increase', value: 2 }) }>Increase By Two</button>
      </div>
      <div>
        <button onClick={ () => {
            countOneDispatcher({ type: 'reset' })
            countTwoDispatcher({ type: 'reset' })
          } }>Reset</button>
      </div>
    </div>
  )
}

export default MultipleReducers
