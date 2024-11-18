
import { useState } from 'react' 

type AuthUser = {
  name: string 
  email: string 
} 

export const Users = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser) 

  const handleLogin = () => {
    setUser({
      name: 'Dhanaraj',
      email: 'dhanaraj@example.com',
    }) 
  } 
  
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email} </div>
    </div>
  ) 
} 


/*
// Important notes:
- We learned, when the type of initial value is different to type of future value in useState hook. 
  we specified that the state type (datatype) can be null or AuthUser. 
  but when we do specify null as one of the possible values, we always have to make a check in our code that user is not null before accessing the properties. 

- The developer would know that user would be set to the correct value very soon after the component mounts and will never be null in the future. 

e.g., 
Assume you cannot log out, in such cases, you can use "type assertion". 

The user is always  type "AuthUser" and instead of "null | AuthUser" (won't be null). 
For type assertion, we use "as" keyword 

we can specify that initial value of AuthUser is an empty object as AuthUser. i.e., {} as AuthUser

Type assertion will now allow us to access name and email without check. So, user.name and user.email without the optional chaining operator. 
*/

