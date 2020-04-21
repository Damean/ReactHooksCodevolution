import React, {useState} from 'react'
import HookMouseUseEffectOnlyOnce from './HookMouseUseEffectOnlyOnce'

function HookMouseUseEffectCleanup() {

  const [display, setDisplay] = useState(true)

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Mouse Listener</button>
      {display && <HookMouseUseEffectOnlyOnce/>}
    </div>
  )
}

export default HookMouseUseEffectCleanup
