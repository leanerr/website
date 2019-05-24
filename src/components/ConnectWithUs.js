import React,{Component}from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import Particles from 'react-particles-js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Footer from "./Footer";
import Index from "./ScrollUp";
import Wave from "./Wave";
import Dnl from "./Dnl";
import {Hidden,Visible} from 'react-grid-system';


export default class ConnectWithUs extends Component{
    render()
    {
        return(<div style={{padding:0,margin:0}}>
                {/*nav*/}

            <Hidden  xs sm>
                <div  className=' navigation navColor'  >

                    <div className='nav__right '>
                        <li><Scrollchor className='rang hbtn hb-border-top-br3 hpad4 hbor4 hpill'   to="#Dwnl"  >دانلود</Scrollchor></li>

                    </div>

                    <div className='nav__left'>
                        <li>   <Link className=" rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/`}>صفحه اصلی</Link></li>
                        <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/Help`}>آموزش ها</Link></li>


                    </div>
                </div>
            </Hidden>

            <Visible xs sm>
                <div  className=' navigationXS backColor' style={{ paddingLeft:'9% !important'}}  >
                    <div className='nav__left'>
                        <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/`}>صفحه اصلی</Link></li>
                        <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/Help`}>آموزش ها</Link></li>

                    </div>
                </div>
            </Visible>
            {/*particles*/}
            <div className='backColor'>
                <div  style={{height: '18vh' , width:'75%',paddingRight:'10%',paddingLeft:'10%'}}>
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
                {/*head*/}
                <div style={{height:'auto' ,paddingBottom:'3%'}}>
                    <Grid fluid>
                        <Row>
                            <Col  sm={12} md={12} lg={12}> <div className="title " style={{paddingTop:'%'}}>    <h1> FitEx</h1>
                                <h3 className="white">برای ارتباط با ما</h3>
                                <h5 className="white">پاسخگوی شما هستیم</h5>

                            </div></Col>
                            <Col sm={12} md={12} lg={12}> <div className="title">  <img className=" "  src={require('./../image/team.png')} style={{height:'20%' , width : '10%'}}  alt=""/>  </div></Col>
                            <Col sm={12} md={4} lg={4}> <div className="centerText paddiingTop paddingBottom"> <a  href="#" >
                                <Scrollchor   to="#Links"  className="hbtn hb-fill-left-br hpad2 hbor4 hpill" >از طریق تلگرام</Scrollchor>
                                {/*<Scrollchor  to="#Dwnl" ><img className=" paddingTop paddingBottom "  src={require('./../image/downloadx.png')} style={{height:"60px" , width : '170px' }} alt=""/></Scrollchor>*/}
                            </a></div></Col>
                            <Col sm={12} md={4} lg={4}> <div className="centerText paddingTop paddingBottom"> <a  href="#" >
                                <Scrollchor   to="#Links"  className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2 " >ویدیو های ما در آپارات</Scrollchor>
                                {/*<Scrollchor  to="#Dwnl" ><img className=" paddingTop paddingBottom "  src={require('./../image/downloadx.png')} style={{height:"60px" , width : '170px' }} alt=""/></Scrollchor>*/}
                            </a></div>
                            </Col>
                            <Col sm={12} md={4} lg={4}> <div className="centerText paddingTop paddingBottom"> <a  href="#" >
                                <Scrollchor   to="#Links"  className="hbtn hb-fill-right-br hpad2 hbor4 hpill" >از طریق اینستاگرام</Scrollchor>
                                {/*<Scrollchor  to="#Dwnl" ><img className=" paddingTop paddingBottom "  src={require('./../image/downloadx.png')} style={{height:"60px" , width : '170px' }} alt=""/></Scrollchor>*/}
                            </a></div></Col>

                        </Row>
                    </Grid>


                </div>
            </div>
            {/*Links*/}
            <div id='Links' style={{}}  className='paddiingTop'>

                <div style={{paddingTop:'7%',paddingBottom:'7%'}}>
                    <Grid fluid>
                        <Row>
                    <Col sm={4} md={4} lg={4}> <div className=" paddingTop paddingBottom" >
                        <a  href="https://www.t.me/fitex_app" >
                    <div className='backColor2' style={{padding:'5%'}}>
                        <div><h3 className='white title'>از طریق تلگرام</h3></div>
                        <div style={{border:'white solid 2px'}}></div>
                        <div><h3 className='white title'>fitex_app@</h3></div>
                    </div></a></div>
                    </Col>

                    <Col sm={4} md={4} lg={4}> <div className=" paddingTop paddingBottom"> <a  href="https://www.aparat.com/FiteX" >
                        <div className='backColor3' style={{padding:'5%'}}>
                            <div><h3 className='white title'>از طریق آپارات</h3></div>
                            <div style={{border:'white solid 2px'}}></div>
                            <div><h3 className='white title'>Fitex@</h3></div>
                        </div>
                    </a></div></Col>

                            <Col sm={4} md={4} lg={4}> <div className=" paddingTop paddingBottom "   > <a  href="https://www.instagram.com/fitex_app/" >
                            <div className='backColor4' style={{padding:'5%'}}>
                                <div><h3 className='white title'>از طریق اینستاگرام</h3></div>
                                <div style={{border:'white solid 2px'}}></div>
                                <div><h3 className='white title'>fitex_app@</h3></div>
                            </div>
                    </a></div></Col>
                        </Row>
                    </Grid>
                </div>

            </div>
            <Dnl/>
            <Wave/>
            <Index/>
            <Footer/>

        </div>)
    }

}