import React,{Component} from 'react';
import {Row,Col} from 'react-grid-system';
import { Visible, Hidden } from 'react-grid-system';
import "../css/animate.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Scrollchor from 'react-scrollchor';


export default class Head extends Component{
    render(){
        return(<div>
            <div className="txtHeader">
                <Row>
                    <Col style={{paddingTop:'5%'}} className=" shadow" xs={12} sm={12} md={12} lg={6}>
                        <Hidden  xs>
                            <ScrollAnimation  animateOnce={true}  animateIn='fadeIn' offset={100}>
                                <div>
                                    <img className="Headpic Margintop"  src={require('./../image/rocketsvg.png')} alt=""/>
                                </div>
                            </ScrollAnimation>
                        </Hidden>
                    </Col>


                    <Col style={{paddingTop:'10%'}} className=" shadow" xs={12} sm={12} md={12} lg={6}>
                        <div className="headpos  ">
                            <ScrollAnimation  animateOnce={true}  animateIn='fadeInUp' delay={50}>
                                <h1 className="Head" style={{textShadow:'#FFF 0 0 10px',textAlign:'center'}}>bismuth</h1>
                            </ScrollAnimation>
                            <ScrollAnimation  animateOnce={true}  animateIn='fadeInUp' delay={300}>
                                <h2 className="whitetext Head" > واتسگرام چیزی فراتر از تصورات شما به شما میدهد...</h2>
                            </ScrollAnimation>
                            <ScrollAnimation  animateOnce={true}  animateIn='fadeInUp' delay={400}>
                                <h3 className="whitetext Head"> واتسگرام شبکه اجتماعی نیست، ولی بیشتر از همه شبکه های اجتماعی، پیام دارد :)</h3>
                            </ScrollAnimation>
                            <div className="Dnl">
                                <Row>
                                    <Col  className=" shadow" xs={12} sm={12} md={12} lg={6}>
                                        <a className="shadow" href="">
                                            <img src={require('./../image/telegram.png')} alt="دانلود مستقیم"/>
                                        </a>
                                    </Col>
                                    <Col className="" xs={12} sm={12} md={12} lg={6}>
                                        <a className="shadow" href=""><img src={require('./../image/dl-eng (1).png')} alt="دانلود از کافه بازار "/></a>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>);

    }
}