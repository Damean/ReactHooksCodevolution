import React from 'react'

function CounterComponent({ count, countName }) {
  console.log("CounterComponent: " + countName)

  return (
    <div>
      {countName} count is: {count}
    </div>
  )
}

export default React.memo(CounterComponent)
