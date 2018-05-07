import React from 'react'
import Mic from 'react-mic'

export class Mic extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        record: false
      }
      this.startRecording = this.startRecording.bind(this)
      this.stopRecording = this.stopRecording.bind(this)
    }
   
    startRecording () => {
      this.setState({
        record: true
      });
    }
   
    stopRecording () => {
      this.setState({
        record: false
      });
    }
   
    onData(recordedBlob) {
      console.log('chunk of real-time data is: ', recordedBlob);
    }
   
    onStop(recordedBlob) {
      console.log('recordedBlob is: ', recordedBlob);
    }
   
    render() {
      return (
        <div>
          <Mic
            record={this.state.record}
            className="sound-wave"
            onStop={this.onStop}
            strokeColor="#000000"
            backgroundColor="#FF4081" />
          <button onTouchTap={this.startRecording} type="button">Start</button>
          <button onTouchTap={this.stopRecording} type="button">Stop</button>
        </div>
      );
    }
  }