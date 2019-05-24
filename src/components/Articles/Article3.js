import React,{Component}from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import Particles from 'react-particles-js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Dnl from "./../Dnl";
import Wave from "./../Wave";
import Index from "./../ScrollUp";
import Footer from "./../Footer";
import {Hidden,Visible} from 'react-grid-system';



export default class Article3 extends Component{
    componentWillMount(){
        window.scrollTo(0,0)
    }
    render()
    {
        return(<div style={{padding:0,margin:0}}>
            {/*nav*/}
            <Hidden  xs sm>
                <div  className=' navigation backColor4'  >

                    <div className='nav__right '>
                        <li><Scrollchor className='rang hbtn hb-border-top-br3 hpad4 hbor4 hpill'   to="#Dwnl"  >دانلود</Scrollchor></li>

                    </div>

                    <div className='nav__left'>
                        <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/`}>صفحه اصلی</Link></li>
                        <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/ConnectWithUS`}>تماس با ما</Link></li>


                    </div>
                </div>
            </Hidden>

            <Visible xs sm>
                <div  className=' navigationXS backColor4' style={{ paddingLeft:'% !important'}}  >
                    <div className='nav__left'>
                        <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/`}>صفحه اصلی</Link></li>
                        <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/ConnectWithUS`}>تماس با ما</Link></li>

                    </div>
                </div>
            </Visible>
            {/*particles*/}
            <div className='backColor4'>
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
                <div style={{height:'auto' ,paddingBottom:'%'}}>
                    <Grid fluid>
                        <Row>
                            {/*<Col  sm={12} md={12} lg={12}> <div className="title " style={{paddingTop:'%'}}>    <h1> FitEx</h1>*/}
                            {/*<h3 className="white">محتوای اختصاصی</h3>*/}
                            {/*<h5 className="white">تیم محتوای ما با تلاش بسیار تمامی محتوا و آموزش ها را منحصرا و با کیفیت بالا تولید و به روزرسانی می کند </h5>*/}

                            {/*</div></Col>*/}
                            <Col sm={12} md={12} lg={12}> <div className="title">  <img className="radius borderWhite" src={require('../../image/victor-freitas-569958-unsplash.jpg')} style={{height:'50%' , width : '50%' }} alt=""/>  </div></Col>

                            <Col sm={12} md={12} lg={12}> <div className="centerText paddingTop"> <a  href="#" >
                                <Scrollchor   to="#Article"  className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2" >مطالعه کنید</Scrollchor>
                                {/*<Scrollchor  to="#Dwnl" ><img className=" paddingTop paddingBottom "  src={require('./../image/downloadx.png')} style={{height:"60px" , width : '170px' }} alt=""/></Scrollchor>*/}
                            </a></div></Col>

                        </Row>
                    </Grid>


                </div>
            </div>

            <div className=' ' id='Article'>
                <div className='padding' style={{backgroundColor : '#ffffff'}}>
                    <h2 className='font title'>Are you looking to build some serious muscle?
                        Stop wasting your money with supplements that don't work</h2>
                    <p className='font centerText '>
                        The Supplement Guides give you accurate information on which supplements work and which don’t — all of it backed by science.

                        Our guides give you step-by-step instructions on what to take, in what dosage, and at what time.

                        Save time, money, and stress with our unbiased approach to supplements.

                        To help people improve the exact health goals they care about, we offer specific guides:

                        Muscle Building & Exercise Performance Supplement Guide - if all you want to focus on is building muscle, this is the guide for you.
                        Fitness Guide - More than just building muscle and losing fat, we also help you sleep better, keep your joints health, build up your cardiovascular system, and keep your testosterone levels strong.
                        Alternatively, you can get the entire bundle of Supplement Guides. For the price of just three guides, you get access to 17 different guides that help you optimize and elevate whatever your health goal is.

                        If you want to figure out the best way how to look muscular and lean, our Guides are the science-based solution for you.
                    </p>
                    <h2  className='font title'>
                        Muscle Gain and Exercise Summary
                    </h2>
                    <p  className='font centerText'>
                        These supplements may affect muscle mass or performance in athletic activities. Supplements that affect muscle mass may do so by affecting the rate of muscle protein synthesis and breakdown directly, or indirectly by influencing the amount of resistance exercise that people are able to do. Supplements that affect exercise performance may do so through influencing energy production and usage, or the fatiguing effects of exercise on muscular and neurological function.

                        Supplements in this category may be stimulatory like caffeine, increase ATP availability like creatine, reduce the oxygen requirements of metabolism and increase vasdilation like nitrate, increase muscle protein synthesis like the various protein powders, and reduce muscle soreness due to exercise like certain antioxidants and anti-inflammatory compounds.
                    </p>

                </div>

            </div>


            <Wave/>
            <Index/>
            <div>
                <div className="footer backColor4" style={{textAlign:'center'}}>
                    <Grid fluid>
                        <Row>
                            <Col sm={12} md={4} lg={4}>
                                FitEx.Team
                            </Col>
                            <Col sm={12} md={4} lg={4}>
                                since 2019
                            </Col>
                            <Col sm={12} md={4} lg={4}>
                                All Right Reserved
                            </Col>
                        </Row>
                    </Grid>

                </div>
            </div>

        </div>)
    }

}