import React,{Component}from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import Particles from 'react-particles-js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Dnl from "./Dnl";
import Wave from "./Wave";
import Index from "./ScrollUp";
import Footer from "./Footer";


export default class Help extends Component{
    render()
    {
        return(<div style={{padding:0,margin:0}}>
            {/*nav*/}

            <div  className=' navigation navColor'  >

                <div className='nav__right '>
                    <li><Scrollchor className='rang hbtn hb-border-top-br3 hpad4 hbor4 hpill'   to="#Dwnl"  >دانلود</Scrollchor></li>

                </div>

                <div className='nav__left'>
                    <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/`}>صفحه اصلی</Link></li>
                    <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/ConnectWithUS`}>تماس با ما</Link></li>


                </div>
            </div>
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
                <div style={{height:'auto' ,paddingBottom:'5%'}}>
                    <Grid fluid>
                        <Row>
                            <Col  sm={12} md={12} lg={12}> <div className="title " style={{paddingTop:'%'}}>    <h1> FitEx</h1>
                                <h3 className="white">محتوای اختصاصی</h3>
                                <h5 className="white">تیم محتوای ما با تلاش بسیار تمامی محتوا و آموزش ها را منحصرا و با کیفیت بالا تولید و به روزرسانی می کند </h5>

                            </div></Col>
                            <Col sm={12} md={12} lg={12}> <div className="title">  <img className=" "  src={require('./../image/video-camera.png')} style={{height:'20%' , width : '10%'}}  alt=""/>  </div></Col>

                            <Col sm={12} md={12} lg={12}> <div className="title paddingTop paddingBottom"> <a  href="#" >
                                <Scrollchor   to="#Links"  className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2 " >مشاهده آموزش ها</Scrollchor>
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
                            <Col sm={6} md={6} lg={6}> <div className=" paddingTop paddingBottom "   >
                                <div className='backColor2' style={{padding:'2%'}}>
                                    <div><img src={require('./../image/tamrin/photo5882186372092113047.jpg')} style={{height:'90%' , width : '100%' , borderRadiius:'2%'}} alt="دانلود از کافه بازار "/></div>
                                </div>
                            </div></Col>

                            <Col sm={6} md={6} lg={6}> <div className=" paddingTop paddingBottom "   >
                                <div className='backColor3' style={{padding:'2%'}}>
                                    <div><img src={require('./../image/tamrin/photo5882186372092113053.jpg')} style={{height:'90%' , width : '100%' , borderRadiius:'2%'}} alt="دانلود از کافه بازار "/></div>
                                </div>
                            </div></Col>

                            <Col sm={6} md={6} lg={6}> <div className=" paddingTop paddingBottom "   >
                                <div className='backColor4' style={{padding:'2%'}}>
                                    <div><img src={require('./../image/tamrin/photo5882186372092113048.jpg')} style={{height:'90%' , width : '100%' , borderRadiius:'2%'}} alt="دانلود از کافه بازار "/></div>
                                </div>
                            </div></Col>

                            <Col sm={6} md={6} lg={6}> <div className=" paddingTop paddingBottom "   >
                                <div className='backColor4' style={{padding:'2%'}}>
                                    <div><img src={require('./../image/tamrin/photo5882186372092113050.jpg')} style={{height:'90%' , width : '100%' , borderRadiius:'2%'}} alt="دانلود از کافه بازار "/></div>
                                </div>
                            </div></Col>
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