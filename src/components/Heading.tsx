/*
export const Heading = () => {
  return <h2>Placeholder text</h2>  
}
*/

type HeadingProps = {
  children: string 
} 

export const Heading = (props: HeadingProps) => {
  return <h2>{props.children}</h2> 
} 
