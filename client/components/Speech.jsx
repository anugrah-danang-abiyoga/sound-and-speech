import React from 'react'
import SpeechRecognition from 'react-speech-recognition'

function Dictaphone (props) {
    const { transcript, startListening, stopListening, resetTranscript, browserSupportsSpeechRecognition, playerScores } = props
    if (!browserSupportsSpeechRecognition) {
      return <div>Speech recog not supported</div>
    }
    return <div>
        Sound supported
      {<button className="button is-large is-success" onClick={() => startListening()}>Speak</button>}
      {<button className="button is-large is-danger" onClick={() => stopListening()}>
          Stop/Submit
      </button>}
      <br />
      <input type="text" value={transcript} id="speech-field" className="speech-box"/>
    </div>
}


const options = {
  autoStart: false
}


export default SpeechRecognition(options)(Dictaphone)