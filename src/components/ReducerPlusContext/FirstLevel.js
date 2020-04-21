import React, {useContext} from 'react'
import SecondLevel from './SecondLevel'
import {CountContext} from './RootLevel'

function FirstLevel() {

  const countContextObj = useContext(CountContext)

  return (
    <div>
      First Level ({ countContextObj.count })
      <div>
        <button onClick={ () => countContextObj.countDispatch('decrease') }>Decrease</button>
        <button onClick={ () => countContextObj.countDispatch('increase') }>Increase</button>
        <button onClick={ () => countContextObj.countDispatch('reset') }>Reset</button>
      </div>
      <SecondLevel></SecondLevel>
    </div>
  )
}

export default FirstLevel
