import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { OptionalType } from "./components/OptionalType";
import { Oscar } from "./components/Oscar";
import Person from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

function App() {
  // Declaring the person's name with first and last properties
  const personName = {
    first: "Dhanaraj",
    last: "Narasimmareddy",
  };

  const nameList = [
    {
      first: "Dhana",
      last: "Nara",
    },
    {
      first: "Sekar",
      last: "Chandran",
    },
    {
      first: "Jas",
      last: "Deva",
    },
  ];

  return (
    <>
      <Greet name="Sharva Sekar" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      
      {/* Type '{ children: string; }' has no properties in common with type 'IntrinsicAttributes' */}
      {/* <Heading>Placeholder text</Heading> */}

      <Heading>Placeholder text</Heading>


      {/* When the child prop is also another React component, typeof React component is React.ReactNode preferred. */}
      <Oscar>
        <Heading>Oscar goes to AR Rahman!</Heading>
      </Oscar>

      <OptionalType name="Dhanaraj"  isLoggedIn={true} />
    </>
  );
}

export default App;
