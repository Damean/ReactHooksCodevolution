import React, {useState, useMemo} from 'react'

function PerformanceOptimizationUseMemo() {

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const increaseCounterOne = () => {
    setCounterOne(count => count + 1)
  }

  const increaseCounterTwo = () => {
    setCounterTwo(count => count + 1)
  }

  const isCounterOneEven = useMemo(() => {
    let i = 0 
    while ( i < 2000000000 ) i++
    return counterOne % 2 === 0
  }, [counterOne])

  return (
    <div>
      <h3>Performance optimization useMemo</h3>
      <div>
        <div>
          Counter One: {counterOne} ({ isCounterOneEven ? "Even" : "Odd" })
        </div>
        <button onClick={increaseCounterOne}>Increase counter one</button> 
        
      </div>
      <div>
        <div>
          Counter Two: {counterTwo} 
        </div> 
        <button onClick={increaseCounterTwo}>Increase counter two</button>
      </div>
    </div>
  )
}

export default PerformanceOptimizationUseMemo
