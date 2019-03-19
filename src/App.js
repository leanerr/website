import React, { Component } from 'react';
import { Route , Switch } from "react-router-dom";
import {Row,Col,Hidden,Visible} from 'react-grid-system';
import Nav from "./components/nav";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Features from "./components/Features";
import Dnl from "./components/Dnl";
import Wave from "./components/Wave";
import Coles from "./components/Coles";
import News from "./components/News";
import Particles from 'react-particles-js';
import Part from './components/Particles';
import Pro from "./components/Pro";
import Social from "./components/Social";
import Index from "./components/ScrollUp";





class App extends Component {
    render() {
        return (
            <div >
               < Nav />



                <Part

                    />

                <Coles/>

                <Hidden  xs sm>   <Features/></Hidden>
                <News/>
                <Hidden  xs sm>   <Social/></Hidden>


                <Pro />

                <Dnl/>
                    <Wave/>
                <Index/>
                <Footer/>


            </div>

        );
    }
}

export default App;
