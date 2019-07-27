import React,{Component} from'react';
import '../css/flexboxgrid.css';
// import '../css/style.css';
export default class Header extends Component{
    render(){
        return(
          <div className="Header row center-xs">


              <div class="row center-xs">
                  <div class="col-xs-8 col-sm-12  ">
                      <div class="box">
                          <div class="box title">
                              <h1> کوبوک</h1>
                              <h2> برای تسهیل مطالعه دانشگاهیان و مدرسین و  جامعه علمی کشور </h2>
                    <div  class="col-xs-12 col-sm-12  ">
                        <a href="">
                            <img className="paddiingTop "  src={require('./../image/downloadx.png')} style={{height:45,weight:45}} alt=""/>
                        </a>
                    </div>


                                          {/*<div  class="col-xs-12 col-sm-12  ">*/}
                                              {/*<img className="paddiingTop "  src={require('./../image/rocketsvg.png')} style={{height:105,weiht:95}} alt=""/>*/}
                                          {/*</div>*/}
                                <div  class="col-xs-12 col-sm-12  ">
                                              <img className="paddiingTop "  src={require('./../image/rocketsvg.png')} style={{height:100,weiht:105}} alt=""/>
                                          </div>

                          </div>

                      </div>
                  </div>
              </div>
          </div>
        )
    }
}