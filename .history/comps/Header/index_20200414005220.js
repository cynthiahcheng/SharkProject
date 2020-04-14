import React from 'react';
import './header.css';

require('typeface-sniglet');

const Header = ({text}) => <div className = "step">
    <h1>1</h1>

<div className = "pick_your_shark">
    <h1>{text}</h1>
    </div>
    </div>

Header.defaultProps = {

} 

export default Header;