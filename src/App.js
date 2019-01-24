import React, { Component } from 'react';
import './App.css';
import Rent from './Rent';
import Return from './Return';
import BookedCar from './BookedCar';
import ReturnedCar from './ReturnedCar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.bookCar = this.bookCar.bind(this);
    this.returnCar = this.returnCar.bind(this);
    this.state = {
      bookedCar : {},
      returnedCar : {}
    };
  }

  returnCar(carbookingId, newMilage) {
    var data = {
      "CarbookingId":carbookingId,
      "NewMilage":newMilage
    };
    fetch("https://localhost:44370/returncar", {
      mode: 'cors',
      method: 'Post',
      headers: {
        'Accept': 'application/json',
        // "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if(response.status === "OK"){
          this.setState({returnedCar : response});
        }
      })
    };

  bookCar(carType,SSN) {

    var data = {
      "SSN":SSN,
      "CarType": carType,
    };
    console.log(JSON.stringify(data));
    fetch("https://localhost:44370/rentcar", {
      mode: 'cors',
      method: 'Post',
      headers: {
        'Accept': 'application/json',
        // "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        if(response.status === "OK"){
          this.setState({bookedCar : response});
        }
      })
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/rentcar">Hyr bil</Link>
          <Link to="/returncar">Lämna tillbaka</Link>
          <section>
            <Route
              path="/rentcar"
              render={(props) => <Rent {...props} bookCar={this.bookCar} />}
            />
            <Route
              path="/returncar"
              render={(props) => <Return {...props} returnCar={this.returnCar} />}
            />
          </section>
          <div>
            <BookedCar bookedCar={this.state.bookedCar}></BookedCar>
            <ReturnedCar returnedCar={this.state.returnedCar}></ReturnedCar>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
