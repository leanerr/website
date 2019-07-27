import React,{Component}from 'react';
import {Hidden,Visible} from 'react-grid-system';
import { Grid, Row, Col } from 'react-flexbox-grid';

/*import ScrollAnimation from 'react-animate-on-scroll';*/
import "../css/animate.css";
import ScrollAnimation from 'react-animate-on-scroll';


export default class Dnl extends Component{
    render(){
            return(
                <div id="Dwnl" className="Dwnl backColor" style={{paddingTop:5}}>


                <ScrollAnimation animateIn='zoomIn'
                                 initiallyVisible={true}
                                 animateOnce={true}>
                    <div style={{textAlign:'center' , paddingBottom:'8%'}}>

                        {/*<h1 className="h1useh5">دانلود </h1>*/}
                        {/*<h3 className="h5useh1 white" >برای استفاده از خدمات فیتکس </h3>*/}
                    </div>
                </ScrollAnimation>


               <div style={{display : 'flex' , textAlign:'center',  justifyContent: 'center' }}>
                   <div className="Dnl" style={{ paddingBottom:'20%'}}>
                       <a href="/get" className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2 " >  برای دانلود مستقیم کلیک کنید</a>
                       {/*<Grid fluit>*/}
                       {/*<Row>*/}
                           {/*<Col  className=" shadow" sm={12} md={4} lg={4}>*/}
                               {/*<a className="shadow" href="">*/}
                                   {/*<img src={require('./../image/badge-newx.png')} style={{height:'90%' , width : '40%'}}alt="دانلود مستقیم"/>*/}
                               {/*</a>*/}
                           {/*</Col>*/}
                           {/*<Col  className=" shadow" sm={12} md={4} lg={4}>*/}
                               {/*<a className="shadow" href="">*/}
                                   {/*<img src={require('./../image/logo-download.png')} style={{height:'90%' , width : '40%'}} alt="دانلود مستقیم"/>*/}
                               {/*</a>*/}
                           {/*</Col>*/}
                           {/*<Col className="" sm={12} md={4} lg={4}>*/}
                               {/*<a className="shadow" href=""><img src={require('./../image/my2.png')} style={{height:'90%' , width : '40%'}} alt="دانلود از کافه بازار "/></a>*/}
                           {/*</Col>*/}
                       {/*</Row>*/}
                       {/*</Grid>*/}
                   </div>
               </div>
                <Hidden  xs sm md>
                <img className="Wave margintop"  src={require('./../image/wave22.png')} style={{height:'45%' , width:'100%'}} alt=""/>
                </Hidden>

            </div>
        )
    }

}