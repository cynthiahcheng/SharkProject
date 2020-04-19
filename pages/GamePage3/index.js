import React from 'react';
import './gamepage3.css';
import Header from '../../comps/Header';

const Endangered = require('./SVG/Endangered.svg');
const Safe = require('./SVG/Safe.svg');
const Extinct = require('./SVG/Extinct.svg');

const GamePage3 = ({endangered, safe, extinct}) => <div className="game_page3">
<Header color={"#FFF"} text={"3. How endangered is the shark?"}/>
<div className="status_icons">
    <img id="safe_icon" src={safe} />
</div>
<div className="status_title"><Header color={"#FFF"} text={"safe"} /></div>

<div className="status_icons">
    <img id="endangered_icon" src={endangered} />
</div>
<div className="status_title"><Header color={"#FFF"} text={"endangered"} /></div>

<div className="status_icons">
    <img id="extinct_icon" src={extinct} />
</div>
<div className="status_title"><Header color={"#FFF"} text={"extinct"} /></div>>

</div>

GamePage3.defaultProps = {
    safe:Safe,
    endangered:Endangered,
    extinct:Extinct
}

export default GamePage3;
