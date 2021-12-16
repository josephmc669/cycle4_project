import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Menu/>
                <Content/> //El contenido
                <Footer/>
            </div>
        )
    }
}

//export default Footer;