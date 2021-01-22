import React from 'react'
import About from './About'

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>API Interface</h1>
                <h3>Add user scores to the DynamoDB database and see those scores already inserted.</h3>
                <About />
            </div>
        )
     } 
 }

 export default Header