import React,{Component} from 'react';
import Particles from 'react-particles-js';
import {Row,Col,Hidden,Visible} from 'react-grid-system';

import '../css/flexboxgrid.css';

export default class News extends Component {
    render(){
        return(
            <div style={{backgroundColor:'#f5f8ff' , height : 'vh'}} id="Screenshots" >
                {/*<Hidden xs sm>     <div style={{ height: '30vh ' }}>*/}
                    {/*<Particles*/}
                        {/*params={{*/}
                            {/*"particles": {*/}
                                {/*"number": {*/}
                                    {/*"value": 1000,*/}
                                    {/*"density": {*/}
                                        {/*"enable": false,*/}
                                        {/*"value_area": 1500*/}
                                    {/*}*/}
                                {/*},*/}
                                {/*"line_linked": {*/}
                                    {/*"enable": false,*/}
                                    {/*"opacity": 0.02*/}
                                {/*},*/}
                                {/*"move": {*/}
                                    {/*"direction": "right",*/}
                                    {/*"speed": 0.2*/}
                                {/*},*/}
                                {/*"size": {*/}
                                    {/*"value": 1*/}
                                {/*},*/}
                                {/*"opacity": {*/}
                                    {/*"anim": {*/}
                                        {/*"enable": true,*/}
                                        {/*"speed": 1,*/}
                                        {/*"opacity_min": 0.05*/}
                                    {/*}*/}
                                {/*}*/}
                            {/*},*/}
                            {/*"interactivity": {*/}
                                {/*"events": {*/}
                                    {/*"onclick": {*/}
                                        {/*"enable": false,*/}
                                        {/*"mode": "push"*/}
                                    {/*}*/}
                                {/*},*/}
                                {/*"modes": {*/}
                                    {/*"push": {*/}
                                        {/*"particles_nb": 1*/}
                                    {/*}*/}
                                {/*}*/}
                            {/*},*/}
                            {/*"retina_detect": true*/}
                        {/*}} />*/}
                {/*</div>*/}
                {/*</Hidden>*/}
        <div style={{paddingLeft:'12%',paddingRight:'12%'}}>
            < Row style={{ padding : '5%',opacity:'20%' ,backgroundColor:''
                , borderRadius:'4%' ,
                borderBottom:'.1px solid #B4BDFF' ,
                borderTop:'.1px solid #'}}>
                {/*1*/}


                <Col  sm={12} md={8} lg={8} style={{ backgroundColor : ''}}>
                    <div  className="box center " style={{textAlign:'center'  }}>
                        <h1 style={{color:'#2e4e5c'}}>تمرینات کارآمد</h1>
                        <h3 style={{color:'#2e4e5c'}}>برنامه های تمرینی ما همه روزه در اپلیکیشن به روز میشوند, مهم نیست از کجا شروع میکنید, ما به شما کمک میکنیم به اهداف خود برسید</h3> <h3 style={{color:'#2e4e5c'}}>
                    </h3>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={4} style={{ backgroundColor : ''}}>
                    <div style={{textAlign:'center'  , backgroundColor : ''}}>
                        <img className="sicipic" src={require('../image/flamenco-uploading.png')} style={{height:'80%' , width : '80%' ,borderRadius : '5%'}} alt="Telegram"/>
                    </div>
                </Col>



            </Row>
            {/*/!*2*!/*/}
            {/*< Row style={{ padding : '5%',opacity:'20%' , backgroundColor:'#f5f5f5'*/}
            {/*, borderRadius:'4%' ,*/}
            {/*borderBottom:'.1px solid #' ,*/}
            {/*borderTop:'.1px solid #'}}>*/}
            {/*<Col sm={12} md={4} lg={4} style={{ backgroundColor : '#'}}>*/}
            {/*<div style={{textAlign:'center' , backgroundColor : '#'}}>*/}
            {/*<img className="sicipic" src={require('./../image/jan-laugesen-186574-unsplash.jpg')} style={{height:"180px" , borderRadius:"7%"}} alt="Telegram"/>*/}
            {/*</div>*/}
            {/*</Col>*/}

            {/*<Col sm={12} md={8} lg={8} style={{ backgroundColor : '#'}}>*/}
            {/*<div className="box" style={{textAlign:'center' , backgroundColor : '#'}}>*/}
            {/*<h1 style={{color:'#2e4e5c'}}> سمت خریدار</h1>*/}
            {/*<h3 style={{color:'#2e4e5c'}}>*/}
            {/*براحتی کتاب ها و جزوات موردنیازتان را با قیمتی مناسسب پیدا کنید و خودتان نیز با به اشتراک گذاشتن کتاب هابتان به آینده ی مطالعاتی قشر دانشگاهی کمک کنید*/}
            {/*</h3> <h3 style={{color:'#2e4e5c'}}>*/}
            {/*</h3>*/}
            {/*</div>*/}
            {/*</Col>*/}


            {/*</Row>*/}
            {/*3*/}
            < Row className="backColor" style={{ padding : '5%',opacity:'20%' , background: 'linear-gradient(to right , #84aab2, rgba(25, 164, 111, 0.62))'
                , borderRadius:'4%' ,
                borderBottom:'.1px solid #' ,
                borderTop:'.1px solid #B4BDFF'}}>

                <Col sm={12} md={8} lg={8} style={{ backgroundColor : '#'}}>
                    <div className=" center" style={{textAlign:'center', backgroundColor : '#'}}>
                        <h1 style={{color:'#ffffff' }} >برنامه غذایی منحصر بفرد</h1>
                        <h4 style={{color:'#ffffff '}}> اگر تغذیه را رها کنید نتایج فوق العاده ورزش را از دست

                            می دهید. برنامه های شخصی ما به شما کمک میکند تا به اهداف خود برسید ودر طول

                            راه از انرژی لذت ببرید
                        </h4>
                        {/*<h3 style={{color:'#2e4e5c'}}>مفتخریکه بتوانیم گامی رو به جلو برای جامعه تحصیل کرده کشور برداریم*/}
                        {/*</h3>*/}
                    </div>
                </Col >
                <Col sm={12} md={4} lg={4} style={{ backgroundColor : '#'}}>
                    <div  style={{textAlign:'center' , backgroundColor : '#'}}>
                        <img className="sicipic" src={require('./../image/d14b9d3676249c5cca60116320c18c4f.png')} style={{height:'80%' , width : '80%' ,borderRadius : '5%'}} alt="Telegram"/>
                    </div>
                </Col>
                {/* 3 */}
            </Row>   < Row style={{ padding : '5%',opacity:'20%'
            ,backgroundColor:'#f5f5f5'
            , borderRadius:'4%' ,
            borderBottom:'.1px solid #' ,
            borderTop:'.1px solid #B4BDFF'}}>

            <Col sm={12} md={8} lg={8} style={{ backgroundColor : '#'}}>
                <div className="box center" style={{textAlign:'center', backgroundColor : '#'}}>
                    <h1 style={{color:'#2e4e5c'}}>آموزش های علمی و حرفه ای</h1>
                    <h3 style={{color:'#2e4e5c'}}> با تکیه بر معتبر ترین منابع و دانش  حرفه ای ترین متخصصین ورزش و سلامت وارد دنیای حرفه ای ها خواهید شد و نتایج منطقی اما قابل تمجید خواهید گرفت
                    </h3>
                    {/*<h3 style={{color:'#2e4e5c'}}>مفتخریکه بتوانیم گامی رو به جلو برای جامعه تحصیل کرده کشور برداریم*/}
                    {/*</h3>*/}
                </div>
            </Col >
            <Col sm={12} md={4} lg={4} style={{ backgroundColor : '#'}}>
                <div style={{textAlign:'center' , backgroundColor : '#'}}>
                    <img className="sicipic" src={require('./../image/cherry-upgrade.png')} style={{height:'80%' , width : '80%' ,borderRadius : '5%'}} alt="Telegram"/>
                </div>
            </Col>

        </Row>
        </div>
            </div>
        )
    }
}
