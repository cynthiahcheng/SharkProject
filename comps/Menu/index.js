import React from 'react';
import './menu.css';

const backImg = require('./SVG/Back_Arrow.svg');
const logoImg = require('./SVG/Shark_Logo.svg');
const hamImg = require('./SVG/Hamburger_Menu.svg');


const Menu = ({backimg, logoimg, hamimg}) => <div className='menu'>
    <div className='menu_icons'>
        <div idName="iconback">
        <img className="icon" src={backimg} />
        </div>
        <div idName="iconlogo">
        <img className="icon" src={logoimg} />
        </div>
        <div idName="iconham">
        <img className="icon" src={hamimg} />
        </div>
    </div>
</div>

    Menu.defaultProps = {
        backimg: backImg,
        logoimg: logoImg,
        hamimg: hamImg
    }

export default Menu;