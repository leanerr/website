import React,{Component} from 'react';
import Particles from 'react-particles-js';
import {Row,Col,Hidden,Visible} from 'react-grid-system';


export default class Social extends Component{
    render(){
        return(
            <div style={{ height: '60vh' , backgroundColor:'black'}} >
                <Hidden xs sm>     <div style={{ height: '0vh'}}>
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 1000,
                                    "density": {
                                        "enable": false,
                                        "value_area": 1500
                                    }
                                },
                                "line_linked": {
                                    "enable": false,
                                    "opacity": 0.02
                                },
                                "move": {
                                    "direction": "right",
                                    "speed": 0.2
                                },
                                "size": {
                                    "value": 1
                                },
                                "opacity": {
                                    "anim": {
                                        "enable": true,
                                        "speed": 1,
                                        "opacity_min": 0.05
                                    }
                                }
                            },
                            "interactivity": {
                                "events": {
                                    "onclick": {
                                        "enable": false,
                                        "mode": "push"
                                    }
                                },
                                "modes": {
                                    "push": {
                                        "particles_nb": 1
                                    }
                                }
                            },
                            "retina_detect": true
                        }} />
                                     </div>
                </Hidden>
                <div class="row center-xs">
                    <div class="col-xs-8 col-sm-12  ">
                        <div class="box">
                            <div class="box ">
                                <div class="title">    <h1> FitEx</h1></div>
                                <h2> برای تسهیل و گسترش ورزش و سلامت </h2>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}