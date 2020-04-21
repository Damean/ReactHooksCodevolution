import React, {useContext} from 'react'
import ThirdLevel from './ThirdLevel'
import {CountContext} from './RootLevel'

function SecondLevel() {

  const countContextObj = useContext(CountContext)

  return (
    <div>
      Second Level ({ countContextObj.count })
      <div>
        <button onClick={ () => countContextObj.countDispatch('decrease') }>Decrease</button>
        <button onClick={ () => countContextObj.countDispatch('increase') }>Increase</button>
        <button onClick={ () => countContextObj.countDispatch('reset') }>Reset</button>
      </div>
      <ThirdLevel></ThirdLevel>
    </div>
  )
}

export default SecondLevel
