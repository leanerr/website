import React,{Component}from 'react';
import {Row,Col,Hidden,Visible} from 'react-grid-system';
/*import ScrollAnimation from 'react-animate-on-scroll';*/
import "../css/animate.css";
import ScrollAnimation from 'react-animate-on-scroll';


export default class Dnl extends Component{
    render(){
            return(
                <div id="Dwnl" className="Dwnl" style={{paddingTop:5}}>


                <ScrollAnimation animateIn='zoomIn'
                                 initiallyVisible={true}
                                 animateOnce={true}>
                    <div style={{textAlign:'center' , paddingBottom:'8%'}}>

                        <h1 className="h1useh5">دانلود </h1>
                        <h3 className="h5useh1" >برای استفاده از خدمات فیتکس </h3>
                    </div>
                </ScrollAnimation>


               <div style={{display : 'flex' , textAlign:'center',  justifyContent: 'center'}}>
                   <div className="Dnl">
                       <Row>
                           <Col  className=" shadow" xs={12} sm={12} md={4} lg={4 }>
                               <a className="shadow" href="">
                                   <img src={require('./../image/badge-newx.png')} style={{height:'30%' }} alt="دانلود مستقیم"/>
                               </a>
                           </Col>
                           <Col  className=" shadow" xs={12} sm={12} md={4} lg={4 }>
                               <a className="shadow" href="">
                                   <img src={require('./../image/logo-download.png')} style={{height:'30%' }} alt="دانلود مستقیم"/>
                               </a>
                           </Col>
                           <Col className="" xs={12} sm={12} md={4} lg={4}>
                               <a className="shadow" href=""><img src={require('./../image/my2.png')} style={{height:'30%'}} alt="دانلود از کافه بازار "/></a>
                           </Col>
                       </Row>
                   </div>
               </div>
                <Hidden  xs>
                <img className="Wave margintop"  src={require('./../image/wave22.png')} style={{height:'45%'}} alt=""/>
                </Hidden>

            </div>
        )
    }

}