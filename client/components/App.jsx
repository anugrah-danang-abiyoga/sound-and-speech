import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Speech from './Speech'
import Mic from './Mic'

const App = props => {
    return (
    <Router>
        <div>
            <Route exact path="/" component={Speech} />
            <Route path="/Mic" component={Mic}/>
            <p>hello</p>
            {/* <h1>try "export default class...." on line 4 of Mic instead :)</h1> */}
        </div>
    </Router>)
}

export default App