import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import { Routes, Route, NavLink } from "react-router-dom";
import {eventPage} from './rudder/eventBuilder';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0, name: "Book" },
      { id: 2, value: 0, name: "Watch" },
      { id: 3, value: 0, name: "Food" },
      { id: 4, value: 0, name: "Drink" },
      { id: 5, value: 0, name: "Phone" }
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleRestart = () => {
    window.location.reload();
  };

  handleNavClick = (ev) => {
    const { innerHTML: pageTitle, href: url, baseURI: referrer } = ev.target
    eventPage(pageTitle, {url, referrer, sender: "Ranganath"});
  }

  render() {
    return (
      <div className="main__wrap">
        <main className="container">
          <div>
            <NavLink to="/" onClick={this.handleNavClick}>Home</NavLink> | 
            <NavLink to="about" onClick={this.handleNavClick}>About</NavLink> |
            <NavLink to="contact" onClick={this.handleNavClick}>Contact</NavLink>
          </div>
          <Routes>
            <Route path="/" element={
              <div className="card__box">
              <NavBar
                totalCounters={
                  this.state.counters.filter((c) => c.value > 0).length
                }
              />
              <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onRestart={this.handleRestart}
              />
            </div>
            }> 
            </Route>
            <Route path="about" element={<h1>This is the about page</h1>}></Route>
            <Route path="contact" element={<h1>This is the contact page</h1>}></Route>
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
