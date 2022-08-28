import { Component } from 'react';
import {useState, useEffect} from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = (props) => {

//the useState returns an array containing the following: [stateOfVariable, state setter function], we define what we call these two things when we destructure it below
//also we put the *initial state* of our state inside the useState() when we define it
const [searchedName, setSearchField] = useState('');
const [employees, setEmployees] = useState([]);
const [filteredEmployees, setFilteredEmployees] = useState(employees);

useEffect(()=>{
  fetch('http://localhost:3000/employees')
      .then(res => res.json())
      .then((listOfEmployees) => {
        setEmployees(listOfEmployees);
      });
},[])

/*only sets a new state for filteredEmployees, used below to pass in as a prop for the CardList 
component which generates the list of Cards that we see, whenever the state of searchedName changes 
(this state is what changes whenever the user inputs a new query into the SearchBox) 
or whenever our employees state changes (the array of employee Objects) */
useEffect(()=>{
  setFilteredEmployees(employees.filter((employee)=>{
    return employee.name.toLowerCase().includes(searchedName);
  }));
},[employees,searchedName]);

  //defining the function of onSearchChange out here so that the syntax of our event handler is made clearer in our return()
  const onSearchChange = (event) => {
    const nameQuery = event.target.value.toLowerCase();
    setSearchField(nameQuery);
  };

 

  return (
    <div className="App">
      <h1 className="app-title">Characters I Like</h1>
      {/* remember that handleClick will pass down the onSearchChange function *as a prop* */}
      <SearchBox className="search-box" placeholder='Search for Characters Here' handleClick={onSearchChange} />
      <header className="App-header">
        <CardList customEmployees={filteredEmployees} />
      </header>
    </div>
  );
}

// componentDidMount(){
//   fetch('http://localhost:3000/employees')
//     .then(res => res.json())
//     .then((listOfEmployees) => {
//       this.setState(() => {
//         return { employees: listOfEmployees }
//       });
//     });
// };




export default App;
