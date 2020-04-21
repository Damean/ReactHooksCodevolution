import React from 'react'
import {ContextA} from './FirstLevel'
import {ContextB} from './FirstLevel'

function ThirdLevel() {
  return (
    <div>
      <ContextA.Consumer>
        {
          contextA => {
            return (
              <ContextB.Consumer>
                {
                  contextB => {
                    return (
                      <>
                        <h3>Context, No Hooks</h3>
                        <p>ContextA value is: {contextA}</p>
                        <p>ContextB value is: {contextB}</p>
                      </>
                    )
                  }
                }
              </ContextB.Consumer>
            )
          }
        }
      </ContextA.Consumer>
    </div>
  )
}

export default ThirdLevel
