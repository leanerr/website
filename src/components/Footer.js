import React,{Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
export default class Footer extends Component{
    render(){
        return(
        <div >
            <div className="footer backColor" style={{textAlign:'center'}}>
                <Grid fluid>
                    <Row>
                        <Col sm={12} md={4} lg={4}>
                            FitEx.Team
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                        since 2019
                     </Col>
                        <Col sm={12} md={4} lg={4}>
                        All Right Reserved
                    </Col>
                    </Row>
                </Grid>

            </div>

            {/*<div className="footer row center-xs center-sm backColor" >*/}
                {/*<div className=" ">*/}
                    {/*<div className="row ">*/}
                        {/*<div className="col-xs-4">*/}
                            {/*<div className="box">*/}
                                     {/*FitEx.Team*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="col-xs-4">*/}
                            {/*<div className="box">*/}
                              {/*since 2019*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="col-xs-4">*/}
                            {/*<div className="box">*/}
                              {/*All Right Reserved*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
        )
    }
}