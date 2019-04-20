import React,{Component} from 'react';
import Particles from 'react-particles-js';
import {Row,Col,Hidden,Visible} from 'react-grid-system';
import Scrollchor from 'react-scrollchor';


export default class Social extends Component{
    render(){
        return(
            <div className="backColor" style={{ height: '50vh' , backgroundColor:'black'}} >
                    {/*<div style={{ height: '20vh'}}>*/}
                        {/*<Particles*/}
                            {/*params={{*/}
                                {/*"particles": {*/}
                                    {/*"number": {*/}
                                        {/*"value": 160,*/}
                                        {/*"density": {*/}
                                            {/*"enable": false*/}
                                        {/*}*/}
                                    {/*},*/}
                                    {/*"size": {*/}
                                        {/*"value": 10,*/}
                                        {/*"random": true*/}
                                    {/*},*/}
                                    {/*"move": {*/}
                                        {/*"direction": "bottom",*/}
                                        {/*"out_mode": "out"*/}
                                    {/*},*/}
                                    {/*"line_linked": {*/}
                                        {/*"enable": false*/}
                                    {/*}*/}
                                {/*},*/}
                                {/*"interactivity": {*/}
                                    {/*"events": {*/}
                                        {/*"onclick": {*/}
                                            {/*"enable": true,*/}
                                            {/*"mode": "remove"*/}
                                        {/*}*/}
                                    {/*},*/}
                                    {/*"modes": {*/}
                                        {/*"remove": {*/}
                                            {/*"particles_nb": 10*/}
                                        {/*}*/}
                                    {/*}*/}
                                {/*}*/}
                            {/*}} />*/}
                                     {/*</div>*/}

                <div class="row center-xs">
                    <div class="col-xs-8 col-sm-12  ">
                        <div class="box">
                            <div class="box ">
                                <div class="title">    <h1> FitEx</h1></div>
                                <h2> برای گسترش ورزش و سلامت </h2>
                                <Scrollchor   to="#Dwnl"  className="hbtn hb-fill-middle-bg-br hbor4 hpill hpad2 " >حالا دانلود کنید</Scrollchor>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}