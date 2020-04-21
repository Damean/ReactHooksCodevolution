import React, {useRef, useEffect} from 'react'

function InputFocusUseRef() {

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <h3>Input focus using useRef</h3>
      <input ref={inputRef} type="text"/>
    </div>
  )
}

export default InputFocusUseRef
