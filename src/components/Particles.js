import React,{Component} from 'react';
import Particles from 'react-particles-js';
import {Hidden,Visible} from 'react-grid-system';
import Scrollchor from 'react-scrollchor';
import { Grid, Row, Col } from 'react-flexbox-grid';



export default class Part extends Component{
    render(){
        return(
            <div className='backColor' style={{ width: '100%' }} >
                   <div style={{ height: '18vh' }}>
                     <Particles
                      params={{
                          "particles": {
                              "number": {
                                  "value": 62
                              },
                              "size": {
                                  "value": 3
                              }
                          },
                          "interactivity": {
                              "events": {
                                  "onhover": {
                                      "enable": true,
                                      "mode": "repulse"
                                  }
                              }
                          }
                      }} />
              </div>


                <div>
                    <Grid fluid>
                        <Row>
                            <Col  sm={12} md={12} lg={12}> <div className="title " style={{paddingTop:'-%'}}>    <h1 style={{}}> FitEx</h1>
                                <h3 className="white"> بدون محدودیت ورزش کنید</h3>
                                <Hidden md xs sm> <h4 className="white "> آنچه  به سلامتتان کمک میکند اهمیت دارد</h4> </Hidden>

                            </div></Col>

                            <Col sm={12} md={12} lg={12}> <div className="title paddingTop "> <a  href="#" >
                                <Scrollchor   to="#Dwnl"  className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2 " >حالا دانلود کنید</Scrollchor>
                              {/*<Scrollchor  to="#Dwnl" ><img className=" paddingTop paddingBottom "  src={require('./../image/downloadx.png')} style={{height:"60px" , width : '170px' }} alt=""/></Scrollchor>*/}
                               </a></div></Col>
                            <Col sm={12} md={12} lg={12}> <div className="title paddingTop ">  <img className="padBot "  src={require('./../image/rocketsvg.png')} style={{height:'60%' , width : '35%'}}  alt=""/>  </div></Col>


                        </Row>
                    </Grid>


                </div>
                {/*<div className="row center-xs">*/}
                    {/*<div className="col-xs-8 col-sm-12  ">*/}
                        {/*<div className="box">*/}
                            {/*<div className="box ">*/}
                            {/*<div className="title">    <h1> FitEx</h1></div>*/}
                                {/*<h2> بدون محدودیت ورزش کنید</h2>*/}


                                {/*/!*<div  class="col-xs-12 col-sm-12  ">*!/*/}
                                {/*/!*<img className="paddiingTop "  src={require('./../image/rocketsvg.png')} style={{height:105,weiht:95}} alt=""/>*!/*/}
                                {/*/!*</div>*!/*/}
                                {/*<div  className="col-xs-12 col-sm-12  ">*/}
                                    {/*<img className="paddiingTop "  src={require('./../image/rocketsvg.png')} style={{height:'70%' , width : '35%'}}  alt=""/>*/}
                                {/*</div>*/}
                                {/*<div  className="col-xs-12 col-sm-12 col-md-12  ">*/}
                                    {/*<a  href="#">*/}
                                        {/*<Scrollchor  to="#Dwnl" ><img className="paddiingTop "  src={require('./../image/downloadx.png')} style={{height:'45%' , width : '25%'}} alt=""/></Scrollchor>*/}
                                    {/*</a>*/}
                                {/*</div>*/}


                            {/*</div>*/}

                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}

            </div>
        )
    }
}