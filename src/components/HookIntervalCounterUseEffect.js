import React, {useState, useEffect} from 'react'

function HookIntervalCounter() {

  const [count, setCount] = useState(0) 

  const tick = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  // Always define functions inside useEffect to determine the props needed
  /* useEffect(() => {
    function doSomething() {
      console.log(someProp)
    }
    doSomething()
  }, [someProp]) //this prop is needed for it to update properly */

  return (
    <div>
      <h3>Count: {count}</h3>
    </div>
  )
}

export default HookIntervalCounter
