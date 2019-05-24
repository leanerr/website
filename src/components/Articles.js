import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Articles extends Component{
    constructor(props) {
        super(props);
        this.state ={
            articles : []
        }
    }

    render(){
        return(
            <div id='Art' className="parts Margin" style={{backgroundColor:'',paddingTop:'',paddingBottom:'', padding:'5%'}}>
                <h1 className="">Latest News</h1>
                <Grid fluit> <ScrollAnimation animateIn='pulse'
                                              initiallyVisible={true}
                                              animateOnce={true}
                                              delay={100}>
                <Row className="">
                    <Col className="paddingBottom" sm={12} md={4} lg={4}>
                        <div className='backColor2'>


                            <img className="blogpic radius"   style={{width:'88%' , height:'100%' , padding:'5%' , borderRadius:'15% !important'}} src={require('./../image/brooke-lark-229136-unsplash.jpg')} alt="hi"/>
                            <div className='' style={{border:'white solid 2px'}}></div>

                            <h3 className='white'>Not Exercising May Be Worse for Your Health Than Smoking, Study Says</h3>
                            <p className='white'>
                                It’s common knowledge that there are many benefits to being fit, but one large new study found that...</p>
                            <Link to={`/Article1`}><h5  className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2 " >read it</h5></Link>
                        </div>
                    </Col>
                    <Col  className=" paddingBottom" sm={12} md={4} lg={4}>
                        <div className='backColor3'>

                            <img className="blogpic radius" style={{width:'88%' , height:'100%' , padding:'6%' ,borderRadius:'15% !important'}} src={require('./../image/william-daigneault-1176273-unsplash.jpg')} alt="hs"/>
                            <div className='' style={{border:'white solid 2px'}}></div>

                            <h3 className='white'>Fitness trackers prove helpful in monitoring cancer patients</h3>
                            <p className='white'> Fitness trackers can be valuable tools for assessing the quality of life and daily functioning of cancer patients...</p>
                            <Link  to={`/Article2`}><h5 className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2 " >read it</h5></Link>
                        </div>
                    </Col>
                    <Col className="paddingBottom" sm={12} md={4} lg={4}>
                        <div className='backColor4'>

                            <img className="blogpic radius" style={{width:'88%' , height:'100%' , padding:'6%' , borderRadius:'15% !important'}} src={require('./../image/victor-freitas-569958-unsplash.jpg')} alt="s"/>
                            <div className='' style={{border:'white solid 2px'}}></div>

                            <h3 className='white'>Are you looking to build some serious muscle?
                                Stop wasting your money with supplements that don't work</h3>
                            <p className='white '>  he Supplement Guides give you accurate information on which supplements work and...</p>
                            <Link   to={`/Article3`}><h5  className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2"  >read it</h5></Link>
                        </div>

                    </Col>
                </Row>
                </ScrollAnimation>
                </Grid>
            </div>

        )
    }
}
