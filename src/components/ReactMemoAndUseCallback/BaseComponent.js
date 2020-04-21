import React, {useState, useCallback} from 'react'
import CounterComponent from './CounterComponent'
import ButtonComponent from './ButtonComponent'

function BaseComponent() {
  console.log("BaseComponent")

  const [appleCount, setAppleCount] = useState(0)
  const [pineappleCount, setPineappleCount] = useState(0)

  const increaseApples = useCallback(() => {
    setAppleCount(apples => apples + 1)
  }, [])

  const increasePineapples = useCallback(() => {
    setPineappleCount(pineapples => pineapples + 1)
  }, [])


  return (
    <div>
      <h3>Performance improvement with React.memo and UseCallback</h3>
      <div>
        <CounterComponent count={appleCount} countName="Apples"></CounterComponent>
        <ButtonComponent buttonHandler={increaseApples} handlerName="Apple"></ButtonComponent>
      </div>
      <div>
        <CounterComponent count={pineappleCount} countName="Pineapples"></CounterComponent>
        <ButtonComponent buttonHandler={increasePineapples} handlerName="Pineapple"></ButtonComponent>
      </div>
    </div>
  )
}

export default BaseComponent
