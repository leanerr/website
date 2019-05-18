import React,{Component} from'react';
import Scrollchor from 'react-scrollchor';
import {Row,Col,Hidden,Visible} from 'react-grid-system';
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';





export default class Nav extends Component{
    constructor() {
        super();
        this.state = {
            open: false,
            position: 'top',

            noOverlay: false
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
        this.setPosition = this.setPosition.bind(this);
        this.setNoOverlay = this.setNoOverlay.bind(this);
    }
    setPosition(e) {
        this.setState({position: e.target.value});
    }
    setNoOverlay(e) {
        this.setState({noOverlay: e.target.checked});
    }
    toggleDrawer() {
        this.setState({open: !this.state.open});
    }
    closeDrawer() {
        this.setState({open: false});
    }
    onDrawerClose() {
        this.setState({open: false});
    }



    render(){
        return(

            <div>
                <div className="backColor" >

                    <ReactDrawer
                        open={this.state.open}
                        position={this.state.position}
                        onClose={this.onDrawerClose}
                        noOverlay={this.state.noOverlay}>
                        <i onClick={this.closeDrawer} className="icono-cross"></i>
                        <div  className='navigationResponsive backColor'  >

                            <Scrollchor style={{paddingRight:30, paddingTop : 20}}   to="#Dwnl" ><span onClick={()=>{this.toggleDrawer()}}>دانلود</span></Scrollchor>
                            <Scrollchor style={{paddingRight:30, paddingTop : 20}}   to="#What people say" ><span onClick={()=>{this.toggleDrawer()}}>  تصاویر</span></Scrollchor>
                            {/*<Scrollchor style={{paddingRight:30,paddingTop : 20}}  to="#Screenshots" ><span onClick={()=>{this.toggleDrawer()}}>  تصاویر</span> </Scrollchor>*/}
                            <Scrollchor style={{paddingRight:30,paddingTop : 20}}  to="#features" ><span onClick={()=>{this.toggleDrawer()}}> ویژگیها</span></Scrollchor>
                            <Scrollchor style={{paddingRight:30,paddingTop : 20}}  to="#Home"><span onClick={()=>{this.toggleDrawer()}}>  خانه</span></Scrollchor>
                            {/*<Scrollchor style={{paddingRight:30,paddingTop : 20}}  to="#Home"><span onClick={()=>{this.toggleDrawer()}}>  تماس با ما</span></Scrollchor>*/}
                            <a href="/connectWithUs"  className='rang hbtn hb-border-top-br3 hpad4 hbor4 hpill'>تماس با ما </a>
                            <a href="/Help"  className='rang hbtn hb-border-top-br3 hpad4 hbor4 hpill'>آموزش ها </a>
                        </div>
                    </ReactDrawer>

                    {/*desktop*/}
                    <Visible  md lg xl>
                        <div  className=' navigation navColor'  >

                                <div className='nav__right'>
              <li><Scrollchor   to="#Dwnl"  className='rang hbtn hb-border-top-br3 hpad4 hbor4 hpill'  >دانلود</Scrollchor></li>
                         <li> <Scrollchor to="#What people say"  >تصاویر</Scrollchor></li>
                           {/*<li> <Scrollchor  to="#Screenshots" >تصاویر </Scrollchor></li>*/}
                                </div>

                                <div className='nav__left'>
                                    <li><Scrollchor  to="#features" >ویژگیها</Scrollchor></li>
                                    {/*<li><Scrollchor  to="#Home" >خانه</Scrollchor></li>*/}
                                    <li><a href="/connectWithUs"  className='rang hbtn hb-border-top-br3 hpad4 hbor4 hpill'>تماس با ما </a></li>
                                    <li><a href="/Help"  className='rang hbtn hb-border-top-br3 hpad4 hbor4 hpill'>آموزش ها </a></li>

                                </div>

                            <div style={{paddingRight: '45%'}}>
                                <img className='radius' src={require('./../image/photo1752615152809781221.jpg')} style={{width:'28%', borderRadius:'4% !important'}} alt=""/>
                            </div>
                        </div>
                    </Visible>

                    {/*phone*/}
                    <Visible xs sm>
                        <div style={{display:'flex',justifyContent:'space-between',padding:'20px'}}>
                            <div style={{display:'flex',justifyContent:'space-between'}} >
                                <img
                                    onClick={this.toggleDrawer}
                                    disabled={this.state.open && !this.state.noOverlay}
                                    src={require('../image/menu.svg')} style={{width:30,height:30}} alt=""/>
                            </div>
                            {/*<div >*/}
                                {/*<img src={require('./../image/logo.png')} alt=""/>*/}
                            {/*</div>*/}
                        </div>
                    </Visible>


                </div>
                {/*//////////////////////////////////////////////////////////////////////*/}






            </div>


        );

    }

}