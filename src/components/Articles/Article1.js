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
import ScrollAnimation from 'react-animate-on-scroll';



export default class Article1 extends Component{
    componentWillMount(){
        window.scrollTo(0,0)
    }
    render()
    {
        return(<div style={{padding:0,margin:0}}>
            {/*nav*/}
            <Hidden  xs sm md>
            <div  className=' navigation backColor2'  >

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
                <div  className=' navigationXS backColor2' style={{ paddingLeft:'9% !important'}}  >
                <div className='nav__left'>
                    <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/`}>صفحه اصلی</Link></li>
                    <li>   <Link className="rang hbtn hb-border-top-br3 hpad4 hbor4 hpill " to={`/ConnectWithUS`}>تماس با ما</Link></li>

                </div>
                </div>
            </Visible>
            {/*particles*/}
            <div className='backColor2'>
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
                               {/*<Col sm={12} md={12} lg={12}> <div className="title">  <img className="radius borderWhite" src={require('../../image/brooke-lark-229136-unsplash.jpg')} style={{height:'50%' , width : '50%' }} alt=""/>  </div></Col>*/}

                            <Col sm={12} md={12} lg={12}> <div className="centerText " style={{paddingTop : '1%'}}> <a  href="#" >
                                 <Scrollchor   to="#Article"  className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2" >مطالعه کنید</Scrollchor>
                                 {/*<Scrollchor  to="#Dwnl" ><img className=" paddingTop paddingBottom "  src={require('./../image/downloadx.png')} style={{height:"60px" , width : '170px' }} alt=""/></Scrollchor>*/}
                            </a></div></Col>

                        </Row>
                    </Grid>


                </div>
            </div>

            <div className=' ' id='Article'>
                <div className='padding' style={{backgroundColor : '#ffffff'}}>
                    <h2 className='font title'>Not Exercising May Be Worse for Your Health Than Smoking, Study Says</h2>
                    <p className='font centerText '>
                        It’s common knowledge that there are many benefits to being fit, but one large new study found that skipping out on the gym is particularly bad for your health.

                        In fact, the study claims not exercising may be more harmful to your health than smoking.

                        New findings, published Friday in the journal JAMA Network Open, detail how researchers at the Cleveland Clinic studied 122,007 patients from 1991 to 2014, putting them under treadmill testing and later recording mortality rates. Researchers found a clear connection between a longer, healthier life and high levels of exercise. The report calls for health care professionals to encourage patients to achieve and maintain a robust fitness routine.

                        “Cardiorespiratory fitness is inversely associated with long-term mortality with no observed upper limit of benefit,” the study says. “Extremely high aerobic fitness was associated with the greatest survival and was associated with benefit in older patients and those with hypertension.”

                        Although it is widely understood that an active lifestyle can lead to a healthy life, the study concludes that a sedentary lifestyle is the equivalent of having a major disease and the simplest cure is exercise.

                        Dr Wael Jaber, co-author of the study, called the results surprising.

                        “Being unfit on a treadmill or in an exercise stress test has a worse prognosis, as far as death, than being hypertensive, being diabetic or being a current smoker,” Jaber told CNN. “We’ve never seen something as pronounced as this and as objective as this.”

                        The study also took a look at the risk of being overactive and found that “ultra” exercisers do not face higher risk of death: the research consistently found that the more a person exercises the lower their mortality rates.

                        Write to Gina Martinez at gina.martinez@time.com
                    </p>

                </div>

            </div>


            <Wave/>
                <Index/>
            <div>
                <div className="footer backColor2" style={{textAlign:'center'}}>
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