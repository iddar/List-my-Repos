import React, { Component } from 'react'
import './index.css'

import Search from './components/search'
import List from './components/list'

import * as actions from './actions/request'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: 'iddar',
      repos: []
    }
  }

  onSearch (event) {
    event.preventDefault()
    let repos = actions.getUserRepos()
    this.setState({ repos: repos })
  }

  onChange (evnet) {
    this.setState({username: evnet.target.value})
  }

  render () {
    return (
      <div className='App'>
        <img src='https://assets-cdn.github.com/images/modules/logos_page/Octocat.png' />
        <div className='side'>
          <h2>List public repositories</h2>
          <Search
            username={this.state.username}
            onChange={this.onChange.bind(this)}
            onSearch={this.onSearch.bind(this)} />
          <List repos={this.state.repos} />
        </div>
      </div>
    )
  }
}

export default App
