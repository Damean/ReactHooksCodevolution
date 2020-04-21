import React, {useState, useEffect} from 'react'

function HookCounterUseEffect() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Clicked ${count} times`
  })

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment counter ({count})</button>
    </div>
  )
}

export default HookCounterUseEffect
