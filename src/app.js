import React from 'react'
import ReactDOM from 'react-dom'

import ApiInterface from './components/ApiInterface'

// JSX - JavaScript XML
var template = <p>API Interface from app.js!</p>
var appRoot = document.getElementById('app')
ReactDOM.render(<ApiInterface />, appRoot)
