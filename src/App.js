import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My new course</h1>
        <p>its a course i by to learn more about react</p>
        <Person name="Lucas" age="23" />
        <Person name="Julia" age="21">
          My Hobbies: do videos at tiktok
        </Person>
        <Person name="Luck" age="1" />
      </div>
    );
  }
}

export default App;
