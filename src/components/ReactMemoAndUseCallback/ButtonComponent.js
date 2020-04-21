import React from 'react'

function ButtonComponent({ buttonHandler, handlerName }) {
  console.log("ButtonComponent: " + handlerName)

  return (
    <div>
      <button onClick={buttonHandler} >Add {handlerName}</button>
    </div>
  )
}

export default React.memo(ButtonComponent)
