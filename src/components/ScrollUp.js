import React from "react";
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button"; //Add this line Here

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton     ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled"
                                    AnimationDuration={1000}>
                    <img src={require('./../image/up-btn.svg')} style={{width:'',paddingTop:''}}/>
                </ScrollUpButton>
            </div>
        );
    }
}