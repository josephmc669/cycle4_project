import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Footer/>
      </div>
    )
  }
}
