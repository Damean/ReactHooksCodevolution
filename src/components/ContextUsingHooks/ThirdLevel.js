import React, {useContext} from 'react'
import {ContextA} from './FirstLevel'
import {ContextB} from './FirstLevel'

function ThirdLevel() {

  const contextA = useContext(ContextA)
  const contextB = useContext(ContextB)

  return (
    <div>
      <h3>Context Using Hooks</h3>
      {contextA} - {contextB}
    </div>
  )
}

export default ThirdLevel
