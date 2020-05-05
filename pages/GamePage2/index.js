import React from 'react';
import Link from 'next/link';
import './gamepage2.css';
import Header from '../../comps/Header';
import Menu from '../../comps/Menu';

const Polar = require('./SVG/Polar.png');
const Temperate = require('./SVG/Temperate.png');
const Tropical = require('./SVG/Tropical.png');
const backBtn = require('./SVG/back_btn.svg');

const GamePage2 = ({tropical, temperate, polar, backbtn}) => <div className="game_page2">
<Menu />
<Link href="/GamePage"><div id="back_btn"><img src={backbtn} /></div></Link>
<Header color={"#FFF"} text={"2. Pick the location."}/>
<div className="location_icons">
    <Link href="/GamePage3"><img id="tropical_icon" src={tropical} /></Link>
</div>
<div className="location_title"><Header color={"#FFF"} text={"tropical"} /></div>

<div className="location_icons">
    <Link href="/GamePage3"><img id="temperate_icon" src={temperate} /></Link>
</div>
<div className="location_title"><Header color={"#FFF"} text={"temperate"} /></div>

<div className="location_icons">
    <Link href="/GamePage3"><img id="polar_icon" src={polar} /></Link>
</div>
<div className="location_title"><Header color={"#FFF"} text={"polar"} /></div>

</div>

GamePage2.defaultProps = {
    tropical:Tropical,
    temperate:Temperate,
    polar:Polar,
    backbtn:backBtn
}

export default GamePage2;