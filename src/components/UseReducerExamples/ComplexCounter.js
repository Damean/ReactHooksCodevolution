import React, {useReducer} from 'react'

const initialState = {
  counterOne: 0,
  counterTwo: 10
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementOne':
      return { ...state, counterOne: state.counterOne + action.value }
    case 'decrementOne':
      return { ...state, counterOne: state.counterOne - action.value }
    case 'incrementTwo':
      return { ...state, counterTwo: state.counterTwo + action.value }
    case 'decrementTwo':
      return { ...state, counterTwo: state.counterTwo - action.value }
    case 'reset':
      return initialState
    default:
      return state;
  }
}

function ComplexCounter() {

  const [countObj, countObjDispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h3>Complex Reducer</h3>
      <p>Counter One: {countObj.counterOne}</p>
      <p>Counter Two: {countObj.counterTwo}</p>
      <div>
        <button onClick={ () => countObjDispatch({ type: 'decrementOne', value: 1 }) }>Decrement One</button>
        <button onClick={ () => countObjDispatch({ type: 'incrementOne', value: 1 }) }>Increment One</button>
      </div>
      <div>
        <button onClick={ () => countObjDispatch({ type: 'decrementTwo', value: 2 }) }>Decrement Two</button>
        <button onClick={ () => countObjDispatch({ type: 'incrementTwo', value: 2 }) }>Increment Two</button>
      </div>
      <div>
        <button onClick={ () => countObjDispatch({ type: 'reset' }) }>Reset</button>
      </div>
    </div>
  )
}

export default ComplexCounter
