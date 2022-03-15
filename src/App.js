import React, { Component } from 'react';    
import Button from './Button';
import PersonCard from './PersonCard';
    
class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        age1: 45,
        age2: 88
      };
    }
    aumentarEdad1 = () =>{
      this.setState({ ...this.state, age1: this.state.age1 + 1 });
    }
    aumentarEdad2 = () =>{
      this.setState({ ...this.state, age2: this.state.age2 + 1 });
    }
    render() {

        return <div>
          <PersonCard firstName={"Jane"} lastName={"Doe"} age={this.state.age1} hairColor={"Black"}/>
          <Button firstName={"Jane"} lastName={"Doe"} aumentarEdad={this.aumentarEdad1}/>
          <PersonCard firstName={"Jhon"} lastName={"Smith"} age={this.state.age2} hairColor={"Brown"}/>
          <Button firstName={"Jhon"} lastName={"Smith"} aumentarEdad={this.aumentarEdad2}/>
        </div>;
    }
}
    
export default App;
