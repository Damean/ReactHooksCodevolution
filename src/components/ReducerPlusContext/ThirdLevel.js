import React, {useContext} from 'react'
import {CountContext} from './RootLevel'

function ThirdLevel() {

  const countContextObj = useContext(CountContext)

  return (
    <div>
      Third Level ({ countContextObj.count })
      <div>
        <button onClick={ () => countContextObj.countDispatch('decrease') }>Decrease</button>
        <button onClick={ () => countContextObj.countDispatch('increase') }>Increase</button>
        <button onClick={ () => countContextObj.countDispatch('reset') }>Reset</button>
      </div>
    </div>
  )
}

export default ThirdLevel
