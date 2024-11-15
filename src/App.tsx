// import "./App.css";
// import { Greet } from "./components/Greet";
// import Person from "./components/Person";
// import { PersonList } from "./components/PersonList";


// function App() {
//   // Declaring the person's name with first and last properties
//   const personName = {
//     first: "Dhanaraj",
//     last: "Narasimmareddy",
//   };

//   const nameList = [
//     {
//       first: "Dhana",
//       last: "Nara",
//     },
//     {
//       first: "Sekar",
//       last: "Chandran",
//     },
//     {
//       first: "Jas",
//       last: "Deva",
//     },
//   ]

//   return (
//     <>
//       <Greet name="Sharva Sekar" messageCount={10} isLoggedIn={false} />
//       <Person name={personName} />
//       <PersonList names={nameList} />
//     </>
//   );
// }

// export default App;

// /*
// Notes:
// 1. AutoComplete the properties / Autocomplete intellisense
// 2. Display runtime errors directly for immediate debugging instead of checking the browser console.
// 3. type - used for app
// 4. interface - used for library
// */


import "./App.css";
import { Greet } from "./components/Greet";
import Person from "./components/Person";
import { PersonList } from "./components/PersonList";

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
    </>
  );
}

export default App;