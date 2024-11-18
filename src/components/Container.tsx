/*
export const Container = () => {
  return (
    <div style={{ border: '1px solid black', padding: '1rem' }}>
      Text content goes here
    </div>
  )
}
*/

type ContainerProps = {
  styles: React.CSSProperties
};

export const Container = (props: ContainerProps) => {
  return <div style={props.styles}>Text content goes here</div>
};

/*
Important Note: 
style is passed as a prop within the component instead of hard coding
key can be string and value can be string or number
React.CSSProperties provides a valid CSS property (key, value) instead invalid CSS property and string/number.
React.CSSProperties throws an error if the property is invalid or incorrect spelling.
*/
