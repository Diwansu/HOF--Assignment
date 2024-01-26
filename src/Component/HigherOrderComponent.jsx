import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
      ],
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  filtereddataType = () => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.user_type === 'Designer');

    const mapFiltered = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapFiltered;
  };

  filteredInitial = () => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.name[0] === 'J');

    const mapFiltered = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapFiltered;
  };

  TotalAge = () => {
    const filterAge = this.state.userData.filter((age) => age.age > 28 && age.age <= 50);
    const ageFiltered = filterAge.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name : {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));

     const filterData4 = this.state.userData.filter((item)=>{
            if(item.user_type == "Designer"){
                return item;
            } })

    const totalAge = filterData4.reduce((acc, curr) => {
      acc = acc + curr.years;
      return acc;
    }, 0);

    return (
      <>
        {ageFiltered}
        <p>Total Age: {totalAge}</p>
      </>
    );
  };

  render() {
    return (
      <div className='divadjust'>
        <h3>Display all items</h3>
        <ol>{this.renderItems()}</ol>

        <h3>Display based on user type</h3>
        <ol>{this.filtereddataType()}</ol>

        <h3>Filter all data starting with the letter J</h3>
        <ol>{this.filteredInitial()}</ol>

        <h3>Find the total age of users between 29 and 50</h3>
        <ul>{this.TotalAge()}</ul>
      </div>
    );
  }
}

export default App;

                    
                        
                     
                       
                     

                     
                        
                        

                    
             
           
            


