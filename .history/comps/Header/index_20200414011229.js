import React from 'react';
import './header.css';

require('typeface-sniglet');

const defaultImg = require('./Shark_Logo.svg');

const Header = ({text}) => <div className = "step">
    <h1>1</h1>
    <img src={img}></img>

<div className = "pick_your_shark">
    <h1>{text}</h1>
    </div>
    </div>

Header.defaultProps = {
fontSize:45,
text:"Pick the size of your shark."
} 

export default Header;