import React,{Component} from 'react';

export default class Wave extends Component{
    render(){
        return(
            <div className="wave" style={{paddingTop:5}} >
                <div className="socials">





            <ul>
            <li><a href="/"><img className="sicipic" src={require('./../image/youtube.png')} alt="Instagram"/></a></li>
            <li><a href="/"><img className="sicipic" src={require('./../image/pinterest.png')} alt="Instagram"/></a></li>
            <li><a href="/"><img className="sicipic" src={require('./../image/linkedin.png')} alt="Instagram"/></a></li>
            <li><a href="https://www.instagram.com/fitexapp"><img className="sicipic" src={require('./../image/instagram - Copy.png')} alt="Instagram"/></a></li>

            <li><a href="/"><img className="sicipic" src={require('./../image/facebook.png')} alt="Telegram"/></a></li>
            <li><a href="/"><img className="sicipic" src={require('./../image/twitter - Copy.png')} alt="Telegram"/></a></li>
            <li><a href="/"><img className="sicipic" src={require('./../image/telegram.png')} alt="Telegram"/></a></li>
            <li><a href="/"><img className="sicipic" src={require('./../image/com.aparat_512x512.png')} alt="Telegram"/></a></li>
            </ul>






                </div>

            </div>
        )
    }

}