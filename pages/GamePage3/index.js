import React from 'react';
import Link from 'next/link';
import './gamepage3.css';
import Header from '../../comps/Header';
import Menu from '../../comps/Menu';

const Endangered = require('./SVG/Endangered.svg');
const Safe = require('./SVG/Safe.svg');
const Extinct = require('./SVG/Extinct.svg');
const backBtn = require('./SVG/back_btn.svg');

const GamePage3 = ({endangered, safe, extinct, backbtn}) => <div className="game_page3">
<Menu />
<Link href="/GamePage2"><div id="back_btn"><img src={backbtn} /></div></Link>
<div id="how_endangered"><Header color={"#FFF"} text={"3. How endangered is the shark?"}/></div>

<Link href="/MeetPage"><div className="status">
    <div className="status_icons">
        <Link href="/MeetPage"><img id="safe_icon" src={safe} /></Link>
    </div>
    <div className="status_title"><Header color={"#FFF"} text={"safe"} /></div>
</div></Link>

<Link href="/MeetPage"><div className="status">
    <div className="status_icons">
        <img id="endangered_icon" src={endangered} />
    </div>
    <div className="status_title"><Header color={"#FFF"} text={"endangered"} /></div>
</div></Link>

<Link href="/MeetPage"><div className="status">
    <div className="status_icons">
        <Link href="/MeetPage"><img id="extinct_icon" src={extinct} /></Link>
    </div>
    <div className="status_title"><Header color={"#FFF"} text={"extinct"} /></div>
</div></Link>

</div>

GamePage3.defaultProps = {
    safe:Safe,
    endangered:Endangered,
    extinct:Extinct,
    backbtn:backBtn
}

export default GamePage3;