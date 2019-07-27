import React,{Component}from 'react';
import {Row,Col} from 'react-grid-system';
import "../css/animate.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class Features extends Component{
    render(){
        return(

            <div id="features" className="Features backColor" style={{padding:'7%'  }}>
                <div class="row center-xs">
                    <div class="col-xs-6">
                        <div class="box">
                          <div style={{paddingBottom:'6%'}}>
                              <h1 className='white'>
                                  فیتکس
                              </h1>
                              {/*<h3> کسب د.....................................د  </h3>*/}

                          </div>


                        </div>

                    </div>

                    <Row >
                        <Col  className=" " xs={12} sm={12} md={4} lg={4}>



                            <div className="fontColor">
                                <ScrollAnimation   animateOnce={true} delay={250}
                                                   animateIn='fadeInLeft'><h4>ارتباط سریع</h4>
                                    <p >  سریع تر از همیشه به مطالب ورزشی دسترسی یابید</p>
                                </ScrollAnimation>

                                <ScrollAnimation   animateOnce={true} delay={500}
                                                   animateIn='fadeInLeft'>
                                    <h4>دسترسی آسان</h4>
                                    <p> بسادگی میتوانید این برنامه را دانلود کنید و از خدمات آن استفاده نمایید</p>
                                </ScrollAnimation>


                                <ScrollAnimation  animateOnce={true} delay={750}
                                                  animateIn='fadeInLeft'>
                                    <h4>رابط کاربری ساده</h4>
                                    <p>  سهولت استفاده از این برنامه برای عموم  </p>
                                </ScrollAnimation>
                            </div>





                        </Col>

                        <Col className=" " xs={12} sm={12} md={4} lg={4}>


                            <img src={require('./../image/Fitex-screen/photo5850280052187574695.jpg')} style={{height:'560px' , width:"320px",borderRadius:15}} alt="hi" />



                        </Col>
                        <div className="fontColor">
                            <ScrollAnimation style={{paddingTop:'2%'}} animateOnce={true} delay={250}
                                             animateIn='fadeInRight'><h4>کمک به جامعه ورزشی و علمی کشور</h4>
                                <p> با رفع نیاز های ورزشی شما</p>
                            </ScrollAnimation>

                            <ScrollAnimation style={{paddingTop:'2%'}} animateOnce={true} delay={500}
                                             animateIn='fadeInRight'>
                                <h4>راحت تر ورزش کنید</h4>
                                <p> علمی تر و با سطح بالاتری ورزش کنید </p>
                            </ScrollAnimation>


                            <ScrollAnimation style={{paddingTop:'2%'}}  animateOnce={true} delay={750}
                                             animateIn='fadeInRight'>
                                <h4>ارزانتر و با بازدهی بیشتر ورزش کنید</h4>
                                <p>حرکات ورزشی  را با قیمت مناسب تر و حتی به رایگان تهیه نمایید</p>
                            </ScrollAnimation>
                        </div>



                    </Row>


                </div>


            </div>

        )
    }
}