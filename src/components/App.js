import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true
        })
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <>
        <div>
          <div className="Clock">
            <h3 id="time">{this.state.time}</h3>
          </div>
        </div>
      </>
    );
  }
}

export default App;
