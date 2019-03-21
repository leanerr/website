import React,{Component} from 'react';
import Particles from 'react-particles-js';
import {Row,Col,Hidden,Visible} from 'react-grid-system';
import Scrollchor from 'react-scrollchor';



export default class Part extends Component{
    render(){
        return(
            <div style={{ height: '95vh' }} >
          <Hidden xs sm>     <div style={{ height: '30vh' , width:'75%', paddingRight:150}}>
                   <Particles
                       params={{
                           "particles": {
                               "number": {
                                   "value": 110,
                                   "density": {
                                       "enable": false
                                   }
                               },
                               "size": {
                                   "value": 10,
                                   "random": true
                               },
                               "move": {
                                   "direction": "",
                                   "out_mode": "out"
                               },
                               "line_linked": {
                                   "enable": true
                               }
                           },
                           "interactivity": {
                               "events": {
                                   "onclick": {
                                       "enable": false,
                                       "mode": "remove"
                                   }
                               },
                               "modes": {
                                   "remove": {
                                       "particles_nb": 15
                                   }
                               }
                           }
                       }} />               </div>
          </Hidden>
                <div class="row center-xs">
                    <div class="col-xs-8 col-sm-12  ">
                        <div class="box">
                            <div class="box ">
                            <div class="title">    <h1> FitEx</h1></div>
                                <h2>با ما در هر زمان و هر مکان روزانه ورزش کنید</h2>


                                {/*<div  class="col-xs-12 col-sm-12  ">*/}
                                {/*<img className="paddiingTop "  src={require('./../image/rocketsvg.png')} style={{height:105,weiht:95}} alt=""/>*/}
                                {/*</div>*/}
                                <div  class="col-xs-12 col-sm-12  ">
                                    <img className="paddiingTop "  src={require('./../image/rocketsvg.png')} style={{height:100,weiht:105}} alt=""/>
                                </div>
                                <div  class="col-xs-12 col-sm-12  ">
                                    <a  href="#">
                                        <Scrollchor  to="#Dwnl" ><img className="paddiingTop "  src={require('./../image/downloadx.png')} style={{height:45,weight:45}} alt=""/></Scrollchor>
                                    </a>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}