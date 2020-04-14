import React from 'react';
import './header.css';

require('typeface-sniglet');

const Header = ({ text }) => <div className="pick_your_shark">
    <h1>{text}</h1>
</div>

Header.defaultProps = {
    fontSize: 45,
    text: "Pick the size of your shark."
}

export default Header;