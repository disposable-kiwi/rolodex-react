import { Component } from 'react';
import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      employees: [],
      //this searchedName state is being kept track of so we can make sure we have a record of the user's search input and give it access to the rest of the Component
      searchedName: ''
    };

  }

  //fills the component with API data after the Component is mounted (first rendered)
  componentDidMount() {
    fetch('http://localhost:3000/employees')
      .then(res => res.json())
      .then((listOfEmployees) => {
        this.setState(() => {
          return { employees: listOfEmployees }
        });
      });
  };

  onSearchChange = (event)=>{
    const nameQuery = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchedName: nameQuery };
    });
  };

  //the render function is what dictates is actually shown on the page
  render() {

    const {employees, searchedName} = this.state;
    const {onSearchChange} = this;

    //with this filteredEmployees on the outside of the event listener/handler, we are *always* filtering on the full list (this.state.employees) and never ever ever destructively modifying the state of employees (this.state.employees) which is BEST PRACTICE
    const filteredEmployees = employees.filter((employee) => {
      //we are filtering on each employee Object's name attribute, lowercased, based on whether or not it includes the current state of searchedName, which, remember, is changed by the user's search query changes inside the <input> rendered...this why we can always dynamically filter on the FULL ARRAY OF DATA
      return employee.name.toLowerCase().includes(searchedName);
    });

    //this return is what is actually shown on the page
    return (
      <div className="App">
      <h1 className="app-title">Useless Men Rolodex</h1>
      <SearchBox className="search-box" placeholder='Search for Employees Here' handleClick={onSearchChange} />
        {/* <input className="search-box" type="search" placeholder="Search for Employee Here"
          //this onChange event listener captures the event (the change event) and its target (the <input> element) and the value (the user's input)
          onChange={onSearchChange}
        /> */}
        <header className="App-header">
          {/* we render using map on filteredEmployees instead of this.state.employees so we will be able to reflect the constant filtered list of employee Objects while also not altering this.state.employees, this way we can dynamically display to the user their filtered search query in real time. Initally, upon mounting this Component, the searchedName state will be empty so basically filteredEmployees will be the full list of Employee Objects because there is *no* filter present yet but once the state of searchedName changes, the filter will apply and the user, because filteredEmployees is the array being mapped, will see their search being updated in real-time on screen */}
          <CardList customEmployees={filteredEmployees} />
        </header>
      </div>
    )
  };
}

export default App;
