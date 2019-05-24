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
import Help from "./components/Help";
import ConnectWithUs from "./components/ConnectWithUs";
import Slider from "./components/Slider";
import Success from "./components/Success";
import NoSuccess from "./components/NoSuccess";
import SliderXs from "./components/SliderXs";
import navbar from "./components/navbar";
import Articles from "./components/Articles";
import Article1 from "./components/Articles/Article1";
import Article2 from "./components/Articles/Article2";
import Article3 from "./components/Articles/Article3";





class App extends Component {
    render() {
        return (
            <div >


    <Route path="/" exact={true} component={Nav}/>
    <Route path="/" exact={true} component={Part}/>
    <Route path="/ConnectWithUs" exact={true} component={ConnectWithUs}/>
    <Route path="/Article1" exact={true} component={Article1}/>
    <Route path="/Article2" exact={true} component={Article2}/>
    <Route path="/Article3" exact={true} component={Article3}/>
    <Route path="/Help" exact={true} component={Help}/>

    <Route path="/" exact={true} component={Coles}/>


    <Hidden  md xs sm>     <Route path="/" exact={true} component={Features}/> </Hidden>

    <Route path="/" exact={true} component={News}/>
                <Hidden  md xs sm>  <Route path="/" exact={true} component={Slider}/></Hidden>
                <Hidden  lg xl> <Route path="/" exact={true} component={SliderXs}/></Hidden>

    <Hidden  md xs sm>     <Route path="/" exact={true} component={Social}/> </Hidden>

    <Route path="/" exact={true} component={Pro}/>
    <Route path="/" exact={true} component={Articles}/>
                <Route path="/" exact={true} component={Dnl}/>
                <Route path="/" exact={true} component={Wave}/>
                <Route path="/" exact={true} component={Index}/>
                <Route path="/" exact={true} component={Footer}/>





                {/*<Dnl/>*/}
                    {/*<Wave/>*/}
                 {/*<Index/>*/}
                {/*<Footer/>*/}



            </div>

        );
    }
}

export default App;
