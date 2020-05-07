import React, {useEffect} from 'react';
import Link from 'next/link';
import './gamepage3.css';
import Header from '../../comps/Header';
import Menu from '../../comps/Menu';

import {data, ChangeData} from '../../data';
import Router from 'next/router';
console.log(data);


const Endangered = require('./SVG/orange.png');
const Safe = require('./SVG/Safe.png');
const Extinct = require('./SVG/Extinct.png');
const backBtn = require('./SVG/back_btn.svg');

const GamePage3 = ({endangered, safe, extinct, backbtn}) => {

    useEffect(()=>{
        document.querySelector("#how_endangered").style.transition="1s";
        document.querySelector("#safe_icon").style.transition="1.5s";
        document.querySelector("#endangered_icon").style.transition="2s";
        document.querySelector("#extinct_icon").style.transition="0.5s ease-out";
        setTimeout(()=>{
        document.querySelector("#how_endangered").style.left="0";
        document.querySelector("#safe_icon").style.opacity="100%";
        document.querySelector("#endangered_icon").style.opacity="100%";
        document.querySelector("#extinct_icon").style.opacity="100%";
        }, 100);
    }, []);


return <div className="game_page3">
<Menu />
<Link href="/GamePage2"><div id="back_btn"><img src={backbtn} /></div></Link>
<div id="how_endangered"><Header color={"#FFF"} text={"3. How endangered is the shark?"}/></div>

<div className="status" onClick={()=>{
        data.status = "safe";
        ChangeData(data);
        Router.push("/MeetPage");
    }}>
    <div className="status_icons">
        <img id="safe_icon" src={safe} />
    </div>
    <div className="status_title"><Header color={"#FFF"} text={"safe"} /></div>
</div>

<div className="status" onClick={()=>{
        data.status = "endangered";
        ChangeData(data);
        Router.push("/MeetPage");
    }}>
    <div className="status_icons">
        <img id="endangered_icon" src={endangered} />
    </div>
    <div className="status_title"><Header color={"#FFF"} text={"endangered"} /></div>
</div>

<div className="status" onClick={()=>{
        data.status = "extinct";
        ChangeData(data);
        Router.push("/MeetPage");
    }}>
    <div className="status_icons">
        <img id="extinct_icon" src={extinct} />
    </div>
    <div className="status_title"><Header color={"#FFF"} text={"extinct"} /></div>
</div>

</div>
}

GamePage3.defaultProps = {
    safe:Safe,
    endangered:Endangered,
    extinct:Extinct,
    backbtn:backBtn
}

export default GamePage3;