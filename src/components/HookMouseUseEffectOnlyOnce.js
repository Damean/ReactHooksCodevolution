import React, {useState, useEffect} from 'react'

function HookMouseUseEffectOnlyOnce() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const logMousePosition = e => {
    console.log('mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    console.log('registering mouse listener')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('removing mouse listener')
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])

  return (
    <div>
      <p>X: {x} - Y: {y}</p>
    </div>
  )
}

export default HookMouseUseEffectOnlyOnce
