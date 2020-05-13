import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import './menu.css';
import Header from '../Header';

const backImg = require('./SVG/Back_Arrow.svg');
const sharkImg = require('./SVG/Shark_Logo.svg');
const hamImg = require('./SVG/Hamburger_Menu.svg');


const Menu = ({backimg, sharkimg, hamimg, onClick, props, ref}) => { 

return <div className='menu'>
        <div className="menu_closed">
            <div className='back_icon'>
                <img id="back_icon_inner" className="icons" src={backimg} />
            </div>
            <div className="shark_icon">
                
                <Link href="/index"><img id="shark_icon_inner" className="icons" src={sharkimg}/></Link>
            </div>
            <div className="ham_icon">
                <img id="ham_icon_inner" className="icons" src={hamimg} onClick={onClick} />
            </div>
        </div>
            <div className="menu_items">
                    <div className="menu_items_inner">
                        <a id="home" href="/index"><div className="menu_items_text" id="home_text" onClick={()=>{
                            document.querySelector("#home_text").style.color = "#00D2AE";
                        }} onMouseEnter={()=>{
                            document.querySelector("#home_text").style.color = "#00D2AE";
                        }} onMouseLeave={()=>{
                            document.querySelector("#home_text").style.color = "#FFF";
                        }}>Home</div></a>
                    </div>
                    <div className="menu_items_inner">
                        <a id="game" href="/GamePage"><div className="menu_items_text" id="game_text" onClick={()=>{
                            document.querySelector("#game_text").style.color = "#00D2AE";
                        }} onMouseEnter={()=>{
                            document.querySelector("#game_text").style.color = "#00D2AE";
                        }} onMouseLeave={()=>{
                            document.querySelector("#game_text").style.color = "#FFF";
                        }}>Game</div></a>
                    </div>
                    <div className="menu_items_inner">
                        <a id="about" href="/AboutPage"><div className="menu_items_text" id="about_text" onClick={()=>{
                            document.querySelector("#about_text").style.color = "#00D2AE";
                        }} onMouseEnter={()=>{
                            document.querySelector("#about_text").style.color = "#00D2AE";
                        }} onMouseLeave={()=>{
                            document.querySelector("#about_text").style.color = "#FFF";
                        }}>About</div></a>
                    </div>
                    <div className="menu_items_inner">
                        <a id="help" href="/HelpPage"><div className="menu_items_text" id="help_text" onClick={()=>{
                            document.querySelector("#help_text").style.color = "#00D2AE";
                        }} onMouseEnter={()=>{
                            document.querySelector("#help_text").style.color = "#00D2AE";
                        }} onMouseLeave={()=>{
                            document.querySelector("#help_text").style.color = "#FFF";
                        }}>How to Help</div></a>
                    </div>
            </div>
</div>

}
var menu_state = true;

function HamburgerClick(){
    if (menu_state === true){
        document.querySelector(".menu_items").style.opacity = "100%";
        document.querySelector(".menu_items").style.display = "flex";
        menu_state = false;
    } else if (menu_state === false){
        document.querySelector(".menu_items").style.opacity = "0%";
        document.querySelector(".menu_items").style.display = "none";
        menu_state = true;
    }


    // useEffect(()=>{
    //     document.querySelector(".menu_items").style.transition="all 0.75s";
    //     setTimeout(()=>{
    //     document.querySelector(".menu_items").style.opacity="100%";
    //     }, 500);
    // }, []);
}

    Menu.defaultProps = {
        backimg: backImg,
        sharkimg: sharkImg,
        hamimg: hamImg,
        onClick:HamburgerClick,
    }


export default Menu;