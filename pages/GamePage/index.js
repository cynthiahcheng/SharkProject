import React from 'react';
import './gamepage.css';
import Header from '../../comps/Header';
import Menu from '../../comps/Menu';

const smallShark = require('./SVG/Small_Shark.svg');
const medShark = require('./SVG/Med_Shark.svg');
const largeShark = require('./SVG/Large_Shark.svg');

const GamePage = ({smallshark, medshark, largeshark}) => <div className="game_page">
    <Menu />
    <Header color={"#FFF"} />
    <div className="shark_shadows">
        <img id="small_icon" src={smallshark} />
    </div>
    <div className="shark_sizes"><Header color={"#FFF"} text={"small"} /></div>

    <div className="shark_shadows">
        <img id="med_icon" src={medshark} />
    </div>
    <div className="shark_sizes"><Header color={"#FFF"} text={"medium"} /></div>

    <div className="shark_shadows">
        <img id="large_icon" src={largeshark} />
    </div>
    <div className="shark_sizes"><Header color={"#FFF"} text={"large"} /></div>
    </div>

GamePage.defaultProps = {
    smallshark:smallShark,
    medshark:medShark,
    largeshark:largeShark
}

export default GamePage;