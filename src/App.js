import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header.jsx";
import Timer from "./components/Timer.jsx";
import Controller from "./components/Controller.jsx";
import SetTimer from "./components/SetTimer.jsx";

class App extends Component {
  constructor(){
    super()
    this.state = {
      time: "25",
      seconds: "00",
      stopped: false,
      showModal: true,
    }

    this.tick = this.tick.bind(this);
    this.handleInput= this.handleInput.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    this.setState({
      time: min,
      seconds: sec,
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })

    }

    if (min < 10) {
      this.setState({
        time: "0" + min,
      })

    }

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }


    this.secondsRemaining--

  }

  startCountDown() {
    if(this.state.stopped === false) {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.time;
    this.secondsRemaining = time * 60;
    } else {

    }
  
    
  }

  stopCountdown() {
    clearInterval(this.intervalHandle)
    this.setState({
      stopped: true
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    })
  }

  handleInput(e) {
    this.setState({
      time: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.showModal === true ? ( 
          <SetTimer closeModal={this.closeModal} handleInput={this.handleInput}/>  
        ) : ( 
          <div>
            <Timer {...this.state}/>
            <Controller start={this.startCountDown} stop={this.stopCountdown}/>
          </div>
        )  
        }
      </div>
    );
  }
}

export default App;
