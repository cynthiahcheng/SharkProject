import React from 'react';
import './gamepage2.css';
import Header from '../../comps/Header';

const Polar = require('./SVG/Polar.png');
const Temperate = require('./SVG/Temperate.png');
const Tropical = require('./SVG/Tropical.png');

const GamePage2 = ({tropical, temperate, polar}) => <div className="game_page2">
<Header color={"#FFF"} text={"2. Pick the location."}/>
<div className="location_icons">
    <img id="tropical_icon" src={tropical} />
</div>
<div className="location_title"><Header color={"#FFF"} text={"tropical"} /></div>

<div className="location_icons">
    <img id="temperate_icon" src={temperate} />
</div>
<div className="location_title"><Header color={"#FFF"} text={"temperate"} /></div>

<div className="location_icons">
    <img id="polar_icon" src={polar} />
</div>
<div className="location_title"><Header color={"#FFF"} text={"polar"} /></div>>

</div>

GamePage2.defaultProps = {
    tropical:Tropical,
    temperate:Temperate,
    polar:Polar
}

export default GamePage2;
