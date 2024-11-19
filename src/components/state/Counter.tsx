/*
import { useReducer } from 'react' 

// 1. initialState as object
const initialState = { count: 0 } 

// 2. reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload } 
    case 'decrement':
      return { count: state.count - action.payload } 
    default:
      return state 
  }
} 

// 3. Counter component using useReducer hook
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState) 
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Decrement 10
      </button>
    </>
  ) 
} 
*/


/*
In a simple counter component, the useReducer hook is used to maintain the count state and update to the counter value 

1. initial state which is an object with count set to 0. 

2. reducer function 
It is responsible for updating the state 
It accepts state and action as parameters and based on the action type updates the count value 


If action type is increment, count is incremented by a payload that is specified when dispatching the action. 
If action type is decrement, we subtract the payload from the current count value. 
default case returnse state 

3. Counter component using useReducer hook
In Counter component, 
we've called the useReducer hook, passing in the reducer function and the initialState which returns state and dispatch 

increment button is to update the count value which on click dispatches an action where type is increment and payload is 10. 
decrement button is to update the count value which on click dispatches an action where type is decrement and payload is 10. 
*/

import { useReducer } from 'react' 

// 4. Type for state object
type CounterState = {
  count: number
}

// 5. Type for action object
type CounterAction = {
  type: string
  payload: number
}  

// 1. initialState as object
const initialState = { count: 0 } 

// 2. reducer function
function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload } 
    case 'decrement':
      return { count: state.count - action.payload } 
    default:
      return state 
  }
} 

// 3. Counter component using useReducer hook
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState) 
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: false, payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: true, payload: 10 })}>
        Decrement 10
      </button>
    </>
  ) 
} 

// Note: Type 'boolean' is not assignable to type 'string'
