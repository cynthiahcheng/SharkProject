import React, {useState} from 'react';
import './menu.css';
import Header from '../Header';

const backImg = require('./SVG/Back_Arrow.svg');
const sharkImg = require('./SVG/Shark_Logo.svg');
const hamImg = require('./SVG/Hamburger_Menu.svg');


const Menu = ({backimg, sharkimg, hamimg, onClick}) => <div className='menu'>
        <div className="menu_closed">
            <div className='back_icon'>
                <img id="back_icon_inner" className="icons" src={backimg} />
            </div>
            <div className="shark_icon">
                <img id="shark_icon_inner" className="icons" src={sharkimg} />
            </div>
            <div className="ham_icon">
                <img id="ham_icon_inner" className="icons" src={hamimg} onClick={onClick}/>
            </div>
        </div>
            <div className="menu_items">
                    <div className="menu_items_inner"><Header fontSize="50px" color={"#FFF"} text={"Home"}/></div>
                    <div className="menu_items_inner"><Header fontSize="50px" color={"#FFF"} text={"Game"}/></div>
                    <div className="menu_items_inner"><Header fontSize="50px" color={"#FFF"} text={"About"}/></div>
                    <div className="menu_items_inner"><Header fontSize="50px" color={"#FFF"} text={"How to Help"}/></div>
            </div>
</div>

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
}

    Menu.defaultProps = {
        backimg: backImg,
        sharkimg: sharkImg,
        hamimg: hamImg,
        onClick:HamburgerClick
    }

export default Menu;