import React from 'react'
import useInput from './useInput'

function InputFieldsWithCustomHooks() {

  const [firstName, resetFirstName, bindFirstName] = useInput('')
  const [lastName, resetLastName, bindLastName] = useInput()

  const submitHandler = (e) => {
    e.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <h3>Input forms using a custom hook</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name </label>
          <input 
          {...bindFirstName}
          type="text"/>
        </div>
        <div>
          <label>Last Name </label>
          <input 
          {...bindLastName}
          type="text"/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputFieldsWithCustomHooks
