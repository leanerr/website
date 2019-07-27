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



export default class Article2 extends Component{
    componentWillMount(){
        window.scrollTo(0,0)
    }
    render()
    {
        return(<div style={{padding:0,margin:0}}>
            {/*nav*/}
            <Hidden  xs sm>
                <div  className=' navigation backColor3'  >

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
                <div  className=' navigationXS backColor3' style={{ paddingLeft:'% !important'}}  >
                    <div className='nav__left'>
                        <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/`}>صفحه اصلی</Link></li>
                        <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/ConnectWithUS`}>تماس با ما</Link></li>

                    </div>
                </div>
            </Visible>
            {/*particles*/}
            <div className='backColor3'>
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
                <div style={{height:'auto' ,paddingBottom:'1%'}}>
                    <Grid fluid>
                        <Row>
                            {/*<Col  sm={12} md={12} lg={12}> <div className="title " style={{paddingTop:'%'}}>    <h1> FitEx</h1>*/}
                            {/*<h3 className="white">محتوای اختصاصی</h3>*/}
                            {/*<h5 className="white">تیم محتوای ما با تلاش بسیار تمامی محتوا و آموزش ها را منحصرا و با کیفیت بالا تولید و به روزرسانی می کند </h5>*/}

                            {/*</div></Col>*/}
                            {/*<Col sm={12} md={12} lg={12}> <div className="title">  <img className="radius borderWhite" src={require('../../image/william-daigneault-1176273-unsplash.jpg')} style={{height:'50%' , width : '50%' }} alt=""/>  </div></Col>*/}

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
                    <h2 className='font title'>Fitness trackers prove helpful in monitoring cancer patients</h2>
                    <p className='font centerText '>
                        Fitness trackers can be valuable tools for assessing the quality of life and daily functioning of cancer patients during treatment, a new study has found. The trackers, also known as wearable activity monitors, include commercial devices worn on the wrist that log a wearer's step counts, stairs climbed, calories, heart rate and sleep.

                        "One of the challenges in treating patients with advanced cancer is obtaining ongoing, timely, objective data about their physical status during therapy," said Andrew Hendifar, MD, medical director for pancreatic cancer at the Cedars-Sinai Samuel Oschin Comprehensive Cancer Institute. "After all, patients typically spend most of their time at home or work, not in a clinic, and their health statuses change from day to day."

                        Hendifar was the principal investigator and Gillian Gresham, PhD, postdoctoral scientist at the cancer institute, was the first author for the study, which was published online in the journal npj Digital Medicine.

                        The study focused on 37 patients undergoing treatment for advanced cancer at Cedars-Sinai. They wore wrist-mounted fitness trackers throughout the study except when showering or swimming. Sets of activity data were collected for three consecutive visits during treatment. After the final clinical visit, patients were followed for six months to gather additional clinical and survival outcomes.

                        Investigators then compared data from the trackers with patients' assessments of their own symptoms, including pain, fatigue and sleep quality, as collected from a National Institutes of Health questionnaire. These data sets also were compared with two common scales used to gauge physical status and overall health: the Eastern Cooperative Oncology Group Performance Status (ECOG) and Karnofsky Performance Status (KPS) scales.

                        Results suggested that objective data collected from wearable activity monitors can supplement and enhance current assessments of health status and physical function, which are limited by their subjectivity and potential for bias, Gresham said. In the study, increased daily step and stair activity correlated with more positive ratings of a patient's condition on the provider surveys and lower rates of adverse events and hospitalization.

                        "Data gathered through advancements in technology has the potential to help physicians measure the impact of a particular treatment on a patient's daily functioning," Gresham said. "Furthermore, continuous activity monitoring may help predict and monitor treatment complications and allow for more timely and appropriate interventions."

                        As a next step, investigators plan to study long-term use of the monitors in a larger, more diverse group of advanced cancer patients and correlate that data with clinical and self-reported outcomes. "Our hope is that findings from future studies with wearable activity monitors could lead to development of individualized treatment and exercise plans that may result in increased treatment tolerability and improved survival outcomes for patients," Hendifar said.

                        "We are at the beginning of a revolution in healthcare in which digital wearables, coupled with broadband telecommunication, will allow remote monitoring of cancer patients and anticipate the need for intervention before symptoms occur," said Dan Theodorescu, MD, PhD, director of the cancer institute. "This type of work has the potential to tailor our standard follow-up regimens for cancer to each patient, offering truly 'precision follow-up' that is better for patients, providers and society."

                        Investigators received support from the Cedars-Sinai Samuel Oschin Comprehensive Cancer Institute. Gresham received doctoral thesis research funding from the Department of Epidemiology at Johns Hopkins Bloomberg School of Public Health
                    </p>

                </div>

            </div>


            <Wave/>
            <Index/>
            <div>
                <div className="footer backColor3" style={{textAlign:'center'}}>
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