import React from 'react';
import Link from 'next/link';
import './gamepage.css';
import Header from '../../comps/Header';
import Menu from '../../comps/Menu';

import {data, ChangeData} from '../data';
console.log(data);

const smallShark = require('./SVG/Small_Shark.svg');
const medShark = require('./SVG/Med_Shark.svg');
const largeShark = require('./SVG/Large_Shark.svg');
const backBtn = require('./SVG/back_btn.svg');


const GamePage = ({smallshark, medshark, largeshark, backbtn}) => <div className="game_page">
    <Menu />
    <Link href="/index"><div id="back_btn"><img src={backbtn} /></div></Link>
    <div id="pick_shark"><Header color={"#FFF"} /></div>
    
    <Link href="/GamePage2"><div className="size" onClick={()=>{
        ChangeData({
            size:"small"
        })
    }}>
        <div className="shark_shadows">
            <img id="small_icon" src={smallshark} />
        </div>
        <div className="shark_sizes"><Header color={"#FFF"} text={"small"} /></div>
    </div></Link>

    <Link href="/GamePage2"><div className="size" onClick={()=>{
        ChangeData({
            size:"medium"
        })
    }}>
        <div className="shark_shadows">
            <img id="med_icon" src={medshark} />
        </div>
        <div className="shark_sizes"><Header color={"#FFF"} text={"medium"} /></div>
    </div></Link>

    <Link href="/GamePage2"><div className="size" onClick={()=>{
        ChangeData({
            size:"large"
        })
    }}>
        <div className="shark_shadows">
            <img id="large_icon" src={largeshark} />
        </div>
        <div className="shark_sizes"><Header color={"#FFF"} text={"large"} /></div>
    </div></Link>
    </div>

GamePage.defaultProps = {
    smallshark:smallShark,
    medshark:medShark,
    largeshark:largeShark,
    backbtn:backBtn
}

export default GamePage;