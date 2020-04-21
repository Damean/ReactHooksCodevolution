import React from 'react'
import SecondLevel from './SecondLevel'

export const ContextA = React.createContext()
export const ContextB = React.createContext()

function FirstLevel() {
  return (
    <div>
      <ContextA.Provider value={"Context A"}>
        <ContextB.Provider value={"Context B"}>
          <SecondLevel></SecondLevel>
        </ContextB.Provider>
      </ContextA.Provider>
    </div>
  )
}

export default FirstLevel
