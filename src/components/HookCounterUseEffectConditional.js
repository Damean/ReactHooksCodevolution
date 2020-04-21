import React, {useState, useEffect} from 'react'

function HookCounterUseEffectConditional() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    document.title = `clicked ${count} times`
    console.log('HookCounterUseEffectConditional - updating document title after render')
  }, [count])

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Click count ({count})</button>
    </div>
  )
}

export default HookCounterUseEffectConditional
