import React from 'react'
import ReactDOM from 'react-dom'
import App from './app.js'

ReactDOM.render(<App />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
