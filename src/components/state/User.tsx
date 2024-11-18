/*
import { useState } from 'react' 

type AuthUser = {
  name: string 
  email: string 
} 

export const User = () => {
  // When a user visits our website, there are not logged in by default. In that case, we initialize our useState with null.
  const [user, setUser] = useState(null) 

  const handleLogin = () => {
    setUser({
      name: 'Dhanaraj',
      email: 'dhanaraj@example.com',
    }) 
  } 
  const handleLogout = () => {
    setUser(null) 
  } 
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is </div>
      <div>User email is </div>
    </div>
  ) 
} 
*/

/*
Important notes:
1. When a user visits our website, there are not logged in by default. In that case, we initialize our useState with null.


2. name and email are provided by the user.
But it is hard coded here.   { name: 'Dhanaraj', email: 'dhanaraj@example.com' }

3. This will give you an error:
Argument of type '{ name: string, email: string}' is not assignable to parameter of type 'SetStateAction<null>'.
Object literal may only specify known properties, and 'name' does not exist in type '(prevState: null) => null'.


To overcome this issue, we have to explicitly specify the type for useState hook not rely on type inference.
*/


import { useState } from 'react' 

type AuthUser = {
  name: string 
  email: string 
} 

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null) 

  const handleLogin = () => {
    setUser({
      name: 'Dhanaraj',
      email: 'dhanaraj@example.com',
    }) 
  } 
  const handleLogout = () => {
    setUser(null) 
  } 
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email} </div>
    </div>
  ) 
} 

/*
We specify explicitly the state type by including Angle brackets <> after 'useState' keyword.
  useState<null>(null) - type of user can be null
  useState<AuthUser | null>(null) - type of user can be null or AuthUser
i.e. inital value of user is null. In future, type of user can be either null or AuthUser.
*/

/*
Important notes: 
- Optional chaining is must, 
we always have to check if object is exist before accessing its properties
  user?.name -- optional chaining with name autocompletion  
  user?.email -- optional chaining with email autocompletion  
  
- This will give you an error:
  user.name - 'user' is possibly 'null' / Object is possibly 'null'
  user.email - 'user' is possibly 'null' / Object is possibly 'null'
  
  
This is how you type of state value can be a different type compared to the initial value in the useState hook. 
  - specify angle brackets and mention the type of the initial value as well as the future value.
  - in our case it is either AuthUser or null.
  useState<AuthUser | null>(null)   
*/ 
