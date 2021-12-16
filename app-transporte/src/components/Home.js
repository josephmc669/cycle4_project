import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes, useHistory, Redirect, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import Content from './Content'


export default class Home extends Component {
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