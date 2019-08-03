// import React,{Component} from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import ScrollAnimation from 'react-animate-on-scroll';
//
//
// export default class Articles extends Component{
//     constructor(props) {
//         super(props);
//         this.state ={
//             articles : []
//         }
//     }
//
//     render(){
//         return(
//             <div id='Art' className="parts Margin" style={{backgroundColor:'',paddingTop:'',paddingBottom:'', padding:'5%'}}>
//                 <h1 className="">Latest News</h1>
//                 <Grid fluit> <ScrollAnimation animateIn='pulse'
//                                               initiallyVisible={true}
//                                               animateOnce={true}
//                                               delay={100}>
//                 <Row className="" >
//                     <Col className="paddingBottom" sm={12} md={4} lg={4} >
//                         <div  style={{ height : '50%'}}>
//                         <div className='backColor2'>
//
//
//                             <img className="blogpic "   style={{width:'100%' , height:'100%' }} src={require('./../image/brooke-lark-229136-unsplash.jpg')} alt="hi"/>
//                             <div className='' style={{border:'white solid 2px'}} ></div>
//
//                            <div  style = {{padding : '1%'}}>
//                                <h3 className='white'>Not Exercising May Be Worse for Your Health Than Smoking, Study Says</h3>
//                                <p className='white'>
//                                    It’s common knowledge that there are many benefits to being fit, but one large new study found that...</p>
//                                <Link to={`/Article1`}><h5  className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2 " >read it</h5></Link>
//                            </div>
//                         </div>
//                         </div>
//                     </Col>
//                     <Col  className=" paddingBottom" sm={12} md={4} lg={4} >
//                        <div style={{ height : '50%'}}>
//                            <div className='backColor3' >
//
//                                <img className="blogpic" style={{width:'100%' , height:'100%' }} src={require('./../image/william-daigneault-1176273-unsplash.jpg')} alt="hs"/>
//                                <div className='' style={{border:'white solid 2px'}}></div>
//
//                                <div  style = {{padding : '1%'}}>
//                                    <h3 className='white'>Fitness trackers prove helpful in monitoring cancer patients</h3>
//                                    <p className='white'> Fitness trackers can be valuable tools for assessing the quality of life and daily functioning of cancer patients...</p>
//                                    <Link  to={`/Article2`}><h5 className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2 " >read it</h5></Link>
//                                </div>
//                            </div>
//
//                        </div>
//                     </Col>
//                     <Col className="paddingBottom" sm={12} md={4} lg={4}>
//                         <div  style={{ height : '50%'}}>
//                             <div className='backColor4'>
//
//                                 <img className="blogpic " style={{width:'100%' , height:'100%' }} src={require('./../image/victor-freitas-569958-unsplash.jpg')} alt="s"/>
//                                 <div className='' style={{border:'white solid 2px'}}></div>
//                                 <div style = {{padding : '1%'}}>
//                                     <h3 className='white'>Are you looking to build some serious muscle?
//                                         </h3>
//                                     <p className='white '> he Supplement Guides give you accurate information on which supplements work an you can use it...</p>
//                                     <Link   to={`/Article3`}><h5  className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2"  >read it</h5></Link>
//                                 </div>
//                             </div>
//                         </div>
//
//
//                     </Col>
//                 </Row>
//                 </ScrollAnimation>
//                 </Grid>
//             </div>
//
//         )
//     }
// }
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
            <div id='Art' className="parts Margin" style={{backgroundColor:'',paddingTop:'',paddingBottom:'', padding:'5%' , direction : 'ltr !important'}}>
                <h1 className="">Latest News</h1>
                <Grid fluit> <ScrollAnimation animateIn='pulse'
                                              initiallyVisible={true}
                                              animateOnce={true}
                                              delay={100}>
                    <Row className="">
                        <Col className="paddingBottom" sm={12} md={4} lg={4}>
                            <div className='backColor2'>


                                <img className="blogpic radius"   style={{width:'92%' , height:'210px'  , padding:'3.5%' , borderRadius:'15% !important'}} src={require('./../image/victor-freitas-569958-unsplash-min (1).jpg')} alt="hi"/>

                                <div className='' style={{border:'white solid 1.5px'}}></div>

                                <h4 className='white '>Not Exercising May Be Worse for Your Health Than Smoking, Study Says</h4>
                                <p className='white  pSize '>  It’s common knowledge that there are many benefits to being fit, but one large new study found that</p>
                                <Link  to={`/Article1`}><h5 className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2" >read it</h5></Link>
                            </div>
                        </Col>
                        <Col  className=" paddingBottom" sm={12} md={4} lg={4}>
                            <div className='backColor3'>

                                <img className="blogpic radius" style={{width:'92%' , height:'210px' , padding:'3.5%' ,borderRadius:'15% !important'}} src={require('./../image/meghan-holmes-779221-unsplash-min.jpg')} alt="hs"/>
                                <div className='' style={{border:'white solid 1.5px'}}></div>

                                <h4 className='white'>Fitness trackers prove helpful in monitoring cancer patients</h4>
                                <p className='white pSize'> Fitness trackers can be valuable tools for assessing the quality of life and daily functioning of cancer patients</p>
                                <Link  to={`/Article2`}><h5 className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2" >read it</h5></Link>
                            </div>
                        </Col>
                        <Col  className=" paddingBottom" sm={12} md={4} lg={4}>
                            <div className='backColor4'>

                                <img className="blogpic radius" style={{width:'92%' , height:'210px' , padding:'3.5%' ,borderRadius:'% !important'}} src={require('./../image/victor-freitas-570027-unsplash-min.jpg')} alt="hs"/>
                                <div className='' style={{border:'white solid 1.5px'}}></div>

                                <h4 className='white'>Are you looking to build some serious muscle?Stop wasting your money</h4>
                                <p className='white pSize'>  he Supplement Guides give you accurate information on which supplements work an you can use it</p>
                                <Link  to={`/Article3`}><h5 className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2" >read it</h5></Link>
                            </div>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col className="paddingBottom" sm={12} md={12} lg={12}>
                            <div className='backColor'>

                                <div className='backColor' style={{padding:'2%'}}>
                                    <div><h2 className='white title'>مجله ورزشی فیتکس</h2></div>
                                </div>
                                {/*<img className="blogpic radius"   style={{width:'92%' , height:'210px'  , padding:'3.5%' , borderRadius:'15% !important'}} src={require('./../image/victor-freitas-569958-unsplash-min (1).jpg')} alt="hi"/>*/}
                                <div className='' style={{border:'white solid 1.5px'}}></div>

                                <h3 className='white '>ما توی مجله ورزشیمون واستون آخرین مطالب و مقالات تخصصی ورزش و سلامت و حتی تغذیه رو  گرد آوری میکنیم</h3>
                                <p className='white  pSize '>  کلیک کنید تا وارد مجله ورزشی ما بشید و بتونید از آخرین مقالات استفاده کنید</p>
                                <a  href='https://blog.fitexapp.ir/'><h5 className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2" >مجله ورزشی فیتکس</h5></a>
                            </div>
                        </Col>
                    </Row>
                </ScrollAnimation>
                </Grid>
            </div>

        )
    }
}
