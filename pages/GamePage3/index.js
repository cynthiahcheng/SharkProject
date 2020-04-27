import React from 'react';
import Link from 'next/link';
import './gamepage3.css';
import Header from '../../comps/Header';
import Menu from '../../comps/Menu';

const Endangered = require('./SVG/Endangered.svg');
const Safe = require('./SVG/Safe.svg');
const Extinct = require('./SVG/Extinct.svg');

const GamePage3 = ({endangered, safe, extinct}) => <div className="game_page3">
<Menu />
<Header color={"#FFF"} text={"3. How endangered is the shark?"}/>
<div className="status_icons">
    <Link href="/MeetPage"><img id="safe_icon" src={safe} /></Link>
</div>
<div className="status_title"><Header color={"#FFF"} text={"safe"} /></div>

<div className="status_icons">
    <Link href="/MeetPage"><img id="endangered_icon" src={endangered} /></Link>
</div>
<div className="status_title"><Header color={"#FFF"} text={"endangered"} /></div>

<div className="status_icons">
    <Link href="/MeetPage"><img id="extinct_icon" src={extinct} /></Link>
</div>
<div className="status_title"><Header color={"#FFF"} text={"extinct"} /></div>>

</div>

GamePage3.defaultProps = {
    safe:Safe,
    endangered:Endangered,
    extinct:Extinct
}

export default GamePage3;