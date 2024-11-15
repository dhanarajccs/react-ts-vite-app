import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';

function App() {
  // Declaring the person's name with first and last properties
  const personName = {
    first: 'Dhanaraj',
    last: 'Narasimmareddy',
  }
  return (
    <>
      <Greet name="Sharva Sekar" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
    </>
  );
}

export default App;

/*
Notes:
1. AutoComplete the properties / Autocomplete intellisense
2. Display runtime errors directly for immediate debugging instead of checking the browser console.
3. type - used for app
4. interface - used for library
*/