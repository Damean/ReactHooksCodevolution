import React, {useState} from 'react'

function HookCounterObject() {

  const [name, setName] = useState({ firstName: '', lastName: '' })

  return (
    <form>
      <input type="text" value={name.firstName} 
        onChange={e => {
          const val = e.target.value
          setName({ ...name, firstName: val })
        }} />
      <input type="text" value={name.lastName} 
        onChange={e => {
          const val = e.target.value
          setName({ ...name, lastName: val })
        }} />
      <h2>First name is: {name.firstName}</h2>
      <h2>Last name is: {name.lastName}</h2>
      <p>{JSON.stringify(name)}</p>
    </form>
  )
}

export default HookCounterObject
