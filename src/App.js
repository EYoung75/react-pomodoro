import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header.jsx";
import Timer from "./components/Timer.jsx";
import Controller from "./components/Controller.jsx";
import SetTimer from "./components/SetTimer.jsx";
import BreakTimer from "./components/Break.jsx";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: "00",
      seconds: "00",
      showModal: true,
      break: 0
    }
    this.tick = this.tick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleBreak = this.handleBreak.bind(this);
  }
  

  tick() {
      let min = Math.floor(this.secondsRemaining / 60);
      let sec = this.secondsRemaining - (min * 60);
      

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
        if(this.state.break === 2) {
          this.setState({
            break: 0
          })
        }
      }


      this.secondsRemaining--

  }

  startCountDown() {
      this.intervalHandle = setInterval(this.tick, 1000);
      this.secondsRemaining = this.state.time * 60;       
  }

  stopCountdown() {
    clearInterval(this.intervalHandle)
    this.setState({
      showModal: true
    })
  }

  closeModal() {
    this.setState({
      showModal: false,
    })
  }

  handleBreak() {
    this.setState({
      break: +1
    })
  }

  handleInput(e) {
      this.setState({
        time: e.target.value,
        seconds: "00"
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
        {this.state.break === 2 ?  (
          <BreakTimer handleBreak={this.handleBreak} handleInput={this.handleInput}/>
        ) : ""}
      </div>
    );
  }
}

export default App;
