import React,{Component} from 'react';
import Particles from 'react-particles-js';
import {Row,Col,Hidden,Visible} from 'react-grid-system';

import '../css/flexboxgrid.css';

export default class News extends Component {
    render(){
        return(
            <div style={{backgroundColor:'#f5f8ff',padding:'7%', height : 'vh'}} id="Screenshots" >
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
               < Row style={{ padding : '5%',opacity:'20%' ,backgroundColor:'#f5f5f5'
                   , borderRadius:'4%' ,
                   borderBottom:'.1px solid #B4BDFF' ,
                   borderTop:'.1px solid #'}}>
                   {/*1*/}


                   <Col sm={12} md={8} lg={8} style={{ backgroundColor : ''}}>
                       <div className="box" style={{textAlign:'center'  }}>
                           <h1 style={{color:'#2e4e5c'}}>تمرینات کارآمد</h1>
                           <h3 style={{color:'#2e4e5c'}}>برنامه های تمرینی ما همه روزه در اپلیکیشن به روز میشوند, مهمنیست از کجا شروع میکنید, ما به شما کمک میکنیم به اهداف خود برسید</h3> <h3 style={{color:'#2e4e5c'}}>
                       </h3>
                       </div>
                   </Col>
                   <Col sm={12} md={4} lg={4} style={{ backgroundColor : ''}}>
                       <div style={{textAlign:'center'  , backgroundColor : ''}}>
                           <img className="sicipic" src={require('../image/humphrey-muleba-1119283-unsplash.jpg')} style={{height:"180px" , borderRadius:"7%"}} alt="Telegram"/>
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
                < Row style={{ padding : '5%',opacity:'20%' , backgroundColor:'#f5f5f5'
                    , borderRadius:'4%' ,
                    borderBottom:'.1px solid #' ,
                    borderTop:'.1px solid #B4BDFF'}}>

                    <Col sm={12} md={8} lg={8} style={{ backgroundColor : '#'}}>
                    <div className="box" style={{textAlign:'center', backgroundColor : '#'}}>
                        <h1 style={{color:'#2e4e5c'}}>غذاهای سالم و شخصی</h1>
                        <h3 style={{color:'#2e4e5c'}}> اگر تغذیه را رها کنید نتایج فوق العاده ورزش را از دست

                            می دهید. برنامه های شخصی ما به شما کمک میکند تا به اهداف خود برسید ودر طول

                            راه از انرژی لذت ببرید
                        </h3>
                        {/*<h3 style={{color:'#2e4e5c'}}>مفتخریکه بتوانیم گامی رو به جلو برای جامعه تحصیل کرده کشور برداریم*/}
                    {/*</h3>*/}
                    </div>
                </Col >
                <Col sm={12} md={4} lg={4} style={{ backgroundColor : '#'}}>
                    <div style={{textAlign:'center' , backgroundColor : '#'}}>
                        <img className="sicipic" src={require('./../image/victor-freitas-569958-unsplash.jpg')} style={{height:"180px" , borderRadius:"7%"}} alt="Telegram"/>
                    </div>
                </Col>

               </Row>
            </div>
        )
    }
}
