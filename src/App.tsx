import "./App.css";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
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
    </>
  );
}

export default App;
