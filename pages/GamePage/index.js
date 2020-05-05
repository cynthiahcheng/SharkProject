import React from 'react';
import Link from 'next/link';
import './gamepage.css';
import Header from '../../comps/Header';
import Menu from '../../comps/Menu';

const smallShark = require('./SVG/Small_Shark.svg');
const medShark = require('./SVG/Med_Shark.svg');
const largeShark = require('./SVG/Large_Shark.svg');
const backBtn = require('./SVG/back_btn.svg');

const GamePage = ({smallshark, medshark, largeshark, backbtn}) => <div className="game_page">
    <Menu />
    <Link href="/index"><div id="back_btn"><img src={backbtn} /></div></Link>
    <Header color={"#FFF"} />
    <div className="shark_shadows">
        <Link href="/GamePage2"><img id="small_icon" src={smallshark} /></Link>
    </div>
    <div className="shark_sizes"><Header color={"#FFF"} text={"small"} /></div>

    <div className="shark_shadows">
        <Link href="/GamePage2"><img id="med_icon" src={medshark} /></Link>
    </div>
    <div className="shark_sizes"><Header color={"#FFF"} text={"medium"} /></div>

    <div className="shark_shadows">
        <Link href="/GamePage2"><img id="large_icon" src={largeshark} /></Link>
    </div>
    <div className="shark_sizes"><Header color={"#FFF"} text={"large"} /></div>
    </div>

GamePage.defaultProps = {
    smallshark:smallShark,
    medshark:medShark,
    largeshark:largeShark,
    backbtn:backBtn
}

export default GamePage;