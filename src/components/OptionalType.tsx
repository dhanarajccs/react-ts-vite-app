/*
// Without destructuring and default value

type OptionalTypeProps = {
  name: string 
  messageCount?: number 
  isLoggedIn: boolean 
} 

export const OptionalType = (props: OptionalTypeProps) => {
  return (
    <div>
      <h4>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
          : `Welcome Guest`}
      </h4>
    </div>
  ) 
} 
*/

// Destructuring code with optional property and default value:
type OptionalTypeProps = {
  name: string 
  messageCount?: number 
  isLoggedIn: boolean 
} 

export const OptionalType = (props: OptionalTypeProps) => {
  const { messageCount = 0 } = props        // Added default value to messageCount
  
  return (
    <div>
      <h4>
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : `Welcome Guest`}
      </h4>
    </div>
  ) 
} 


/*
Important note:
1. Add ? mark at the end of messageCount
2. destructure messageCount from props and assign the default value to 0.
  (If there is no value in messageCount, it takes the default value as 0) 
*/  