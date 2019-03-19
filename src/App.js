import React, { Component } from 'react';
import './App.scss';
import Header from "./components/Header.jsx";
import Timer from "./components/Timer.jsx";
import Controller from "./components/Controller.jsx";
import SetTimer from "./components/SetTimer.jsx";
import BreakTimer from "./components/Break.jsx";
import Sound from "react-sound";
import alarm from "./assets/Alarm.mp3";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: "00",
      seconds: "00",
      showModal: 0,
      break: false,
      playing: false
    }
    this.tick = this.tick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.stopCountdown = this.stopCountdown.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
        if(this.state.showModal === 1 && this.state.break === false) {
          this.setState({
            break: true,
            showModal: 2,
            playing: true
          }) 
        } else {
          this.setState({
            showModal: 0,
            break: false,
            playing: true
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
      showModal: 0
    })
  }

  closeModal() {
    this.setState({
      showModal: 1,
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
        {this.state.showModal === 0 ? ( 
          <SetTimer closeModal={this.closeModal} handleInput={this.handleInput}/>  
        ) : "" }
          <div>
            <Timer {...this.state}/>
            <Controller start={this.startCountDown} stop={this.stopCountdown}/>
          </div>
         
        
        {this.state.showModal === 2 ?  (
          <BreakTimer closeModal={this.closeModal} handleInput={this.handleInput}/>
        ) : ""}
          <Sound
              url={alarm}
              playing={this.state.playing === true ? Sound.status.PLAYING : Sound.status.STOPPED}
              volume="100"
              autoLoad={true}
          />
      </div>
    );
  }
}

export default App;
