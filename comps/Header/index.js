import React from 'react';
import './header.css';

const Header = ({ text, fontSize, color }) => <div className="pick_your_shark">
    <h1 style={{fontSize:fontSize, color:color}}>{text}</h1>
</div>

Header.defaultProps = {
    fontSize: "45px",
    text: "1. Pick the size of your shark.",
    color: "#000"
}

export default Header;