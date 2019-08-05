
import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';


export default class blog extends Component{
    constructor(props) {
        super(props);
        this.state ={
            articles : []
        }
    }

    render(){
        return(
            <div id='Art' className="parts Margin" style={{backgroundColor:'',paddingTop:'',paddingBottom:'', padding:'2%' , direction : 'ltr !important'}}>
                <h1 className="">Latest News</h1>
                <Grid fluit> <ScrollAnimation animateIn='pulse'
                                              initiallyVisible={true}
                                              animateOnce={true}
                                              delay={100}>

                    <Row className="">
                        <Col className="paddingBottom" sm={12} md={12} lg={12}>
                            <div className='backColor4'>

                                <div className='backColor4' style={{padding:'2%'}}>
                                    <div><h2 className='white title'>مجله ورزشی فیتکس</h2></div>
                                </div>
                                {/*<img className="blogpic radius"   style={{width:'92%' , height:'210px'  , padding:'3.5%' , borderRadius:'15% !important'}} src={require('./../image/victor-freitas-569958-unsplash-min (1).jpg')} alt="hi"/>*/}
                                <div className='' style={{border:'white solid 1.5px'}}></div>

                                <h3 className='white '>ما توی مجله ورزشیمون واستون آخرین مطالب و مقالات تخصصی ورزش و سلامت و حتی تغذیه رو  گرد آوری میکنیم</h3>
                                <h5 className='white  pSize '>  کلیک کنید تا وارد مجله ورزشی ما بشید و بتونید از آخرین مقالات استفاده کنید</h5>
                                <a  href='https://mag.fitexapp.ir' className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2" >مجله ورزشی فیتکس</a>
                            </div>
                        </Col>
                    </Row>
                </ScrollAnimation>
                </Grid>
            </div>

        )
    }
}
