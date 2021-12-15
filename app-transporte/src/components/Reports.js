import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'


export default class Reports extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <h1>Reportes</h1>
                <Footer/>
            </div>
        )
    }
}

//export default Footer;