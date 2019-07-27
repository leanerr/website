import React,{Component}from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';
import Particles from 'react-particles-js';
import { Grid, Row, Col } from 'react-flexbox-grid';


export default class NoSuccess extends Component{
    render()
    {
        return(<div style={{padding:0,margin:0}}>
                {/*nav*/}


                {/*head*/}
                <div style={{height:'auto' ,paddingBottom:'5%'}}>
                    <Grid fluid>
                        <Row>
                            <Col sm={12} md={12} lg={12}> <div className="title paddiingTop">  <img className=" "  src={require('./../image/payment-failed@3x.png')} style={{height:'120px' , width : '120px'}}  alt=""/>
                                <div className="title " style={{paddingTop:'%'}}>
                                    <h5 className="font">پرداخت شما با خطا روبه رو گردید </h5>

                                </div></div></Col>

                            <Grid fluid>
                                <Row>
                                    <Col  xs={6} sm={6} md={6} lg={6}> <div className=" " style={{}}>
                                        <h4 className="font">کد رهگیری</h4>
                                        <h4 className="font">نوع</h4>
                                        <h4 className="font">هزینه</h4>

                                    </div></Col>  <Col  xs={6} sm={6} md={6} lg={6}> <div className=" " style={{}}>
                                    <h4 className="font">3456789789</h4>
                                    <h4 className="font">اشتراک ویژه</h4>
                                    <h4 className="font">1000</h4>


                                </div></Col>


                                </Row>
                                <Row>
                                    <Col sm={12} md={12} lg={12}> <div className="title"> <a  href="#" className="hbtn1 hb-fill-middle-bg-br hbor4 hpill hpad2 ">
                                        بازگشت</a></div></Col>
                                </Row>
                            </Grid>

                        </Row>
                    </Grid>


                </div>
            </div>
        )
    }

}