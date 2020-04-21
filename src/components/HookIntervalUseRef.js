import React, {useRef, useState, useEffect} from 'react'

function HookIntervalUseRef() {

  const [timer, setTimer] = useState(0)

  const timerRef = useRef()

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  return (
    <div>
      <h3>Storing an interval using useRef</h3>
      <p>interval count: {timer}</p>
      <button onClick={ () => clearInterval(timerRef.current) }>Stop interval</button>
    </div>
  )
}

export default HookIntervalUseRef
