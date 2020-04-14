import React from 'react';
import './header.css';

require('typeface-sniglet');

const defaultImg = require('./shark_logo.svg');

const Header = ({text}) => <div className = "step">
    <h1>1</h1>

<div className = "pick_your_shark">
    <h1>{text}</h1>
    </div>
    </div>

Header.defaultProps = {
fontSize:45,
text:"Pick the size of your shark."
} 

export default Header;