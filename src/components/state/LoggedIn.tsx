/*
export const LoggedIn = () => {
  const handleLogin = () => {}
  const handleLogout = () => {}
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is logged in / logged out</div>
    </div>
  )
}
*/

// 1. import useState hook
import { useState } from 'react' 

export const LoggedIn = () => {
  // 2. initialize isLoggedIn state variable with false
  const [isLoggedIn, setIsLoggedIn] = useState(false) 
  
  // 4. define handleLogin and handleLogout functions
  const handleLogin = () => {
    setIsLoggedIn(true) 
  } 
  const handleLogout = () => {
    setIsLoggedIn(false) 
  } 
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* 3. conditionally render the text inside <div> tag */}
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  ) 
} 


/*
Important note: 
1. isLoggedIn.length 
will throw an error: Property 'length' does not exist on type 'boolean'

2. setIsLoggedIn(0) instead of setIsLoggedIn(false)
const setIsLoggedIn: (value: React.SetStateAction<boolean>) => void
Argument of type '0' is not assignable to parameter of type 'SetStateAction<boolean>'

3. setIsLoggedIn(1) instead of setIsLoggedIn(true)
const setIsLoggedIn: (value: React.SetStateAction<boolean>) => void
Argument of type '1' is not assignable to parameter of type 'SetStateAction<boolean>'


In plain JavaScript, 0 is false and 1 is true and vice versa
In React, 0 is false and 1 is true and vice versa
But in typescript, 0/1 are treated as Number and true/false are treated as boolean

const isLoggedIn: boolean
const setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
*/