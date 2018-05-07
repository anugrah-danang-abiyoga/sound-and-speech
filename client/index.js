import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
    console.log("starting")
  ReactDOM.render(
    <App width={window.innerWidth} height={window.innerHeight} />,
    document.getElementById('app')
  )
})