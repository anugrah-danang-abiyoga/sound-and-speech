import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Speech from './Speech'
import Mic from './Mic'

const App = props => {
    return (<Router>
        <div>
            <Speech />
            <Mic />
            <p>hello</p>
        </div>
    </Router>)
}

export default App