import React from 'react';
import './menu.css';

const backImg = require('./SVG/Back_Arrow.svg');
const sharkImg = require('./SVG/Shark_Logo.svg');
const hamImg = require('./SVG/Hamburger_Menu.svg');


const Menu = ({backimg, sharkimg, hamimg}) => <div className='menu'>
        <div className='back_icon'>
            <img idName="back_icon_inner" img className="icons" src={backimg} />
        </div>
        <div className="shark_icon">
            <img id="shark_icon_inner" className="icons" src={sharkimg} />
        </div>
        <div className="ham_icon">
        <img id="ham_icon_inner" className="icons" src={hamimg} />
        </div>
</div>

    Menu.defaultProps = {
        backimg: backImg,
        sharkimg: sharkImg,
        hamimg: hamImg
    }

export default Menu;