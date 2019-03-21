import React,{Component} from'react';
import {Row,Col} from 'react-grid-system';

export default class Coles extends Component{
    render() {
        return (
            <div id="Home" className="parts Margin " style={{backgroundColor:'white'}}>

                {/*<div style={{margin:'4%'}}>*/}
                    {/*<h1 style={{color:'#263238'}}>ویژگی ها</h1>*/}
                    {/*<h3 style={{color:'#121212 ' }}>اگر به دنبال جایی هستید تا کلی ویدیو جذاب و باکیفیت رایگان ببینید،دوستان جدید پیدا کنید و لحظات شیرین و جذاب زندگیتون رو در قالب ویدیو و داستان با اونا شریک بشید، در اپلیکیشن کلیپیکس با ما همراه باشید</h3>*/}
                {/*</div>*/}
                <Row className='colesRow'>
                    <Col className="center" sm={12} md={4} lg={4}>
                        <div>
                            <img className="colpic"  src={require('./../image/meeting-deadlines.png')} alt="hi"/>
                            <h3> برنامه های روزانه ورزشی </h3>

                            <p> هر روز با یک  برنامه ورزشی متفاوت و متنوع با توجه به سطح ورزشی شما</p>
                        </div>
                    </Col>
                    <Col className="right" sm={12} md={4} lg={4}>
                        <div>
                            <img className="colpic" src={require('./../image/graph-analysis.png')} alt="hs"/>
                            <h3>مقاله های تغذیه و ورزش</h3>


                            <p>علم به روز ورزش و تغذیه رو دنبال کنین</p>
                        </div>
                    </Col>
                    <Col className="left" sm={12} md={4} lg={4}>
                        <div>
                            <img className="colpic" src={require('./../image/businessman.png')} alt="s"/>
                            <h3>اکانت رسمی</h3>
                            <p> عدم محدودیت و ارایه خدمات جذاب با ایجاد حساب رسمی</p>
                        </div>

                    </Col>
                </Row>
            </div>
        )
    }
}