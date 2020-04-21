import React, {useState} from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleOne() {

  const [count, setCount] = useState(0)

  useDocumentTitle(count)

  return (
    <div>
      <h3>Custom hook updating document.title</h3>
      <button onClick={() => setCount(count => count + 1)}>Count ({count})</button>
    </div>
  )
}

export default DocTitleOne
