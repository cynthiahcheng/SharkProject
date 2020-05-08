import React, {useEffect} from 'react';
import Link from 'next/link';
import './gamepage2.css';
import Header from '../../comps/Header';
import Menu from '../../comps/Menu';

const Polar = require('./SVG/Polar.png');
const Temperate = require('./SVG/Temperate.png');
const Tropical = require('./SVG/Tropical.png');
const backBtn = require('./SVG/back_btn.svg');

import {data, ChangeData} from '../../data';
import Router from 'next/router';
console.log(data);

const GamePage2 = ({tropical, temperate, polar, backbtn}) => {

    useEffect(()=>{
        document.querySelector("#tropical_icon").style.transition="0.75s ease-out";
        document.querySelector("#temperate_icon").style.transition="0.75s ease-out";
        document.querySelector("#polar_icon").style.transition="0.75s ease-out";
        document.querySelector("#pick_location").style.transition="0.5s ease-out";
        setTimeout(()=>{
        document.querySelector("#pick_location").style.left="0";
        document.querySelector("#tropical_icon").style.opacity="100%";
        document.querySelector("#temperate_icon").style.opacity="100%";
        document.querySelector("#polar_icon").style.opacity="100%";
        }, 100);
    }, []);

return <div className="game_page2" onLoad={()=>{
    window.scrollTo(0,0);
}}>
<Menu />
<Link href="/GamePage"><div id="back_btn"><img src={backbtn} /></div></Link>
<div id="pick_location"><Header color={"#FFF"} text={"2. Pick the location."}/></div>

<div className="location" onClick={()=>{
        data.location = "tropical";
        ChangeData(data);
        Router.push("/GamePage3");
    }} onMouseEnter={()=>{
        document.querySelector("#tropical_icon").style.width = "155px";
    }} onMouseLeave={()=>{
        document.querySelector("#tropical_icon").style.width = "135px";
    }}>
    <div className="location_icons">
        <img id="tropical_icon" src={tropical} />
    </div>
    <div className="location_title"><Header color={"#FFF"} text={"tropical"} /></div>
</div>

<div className="location" onClick={()=>{
        data.location = "temperate";
        ChangeData(data);
        Router.push("/GamePage3");
    }} onMouseEnter={()=>{
        document.querySelector("#temperate_icon").style.width = "101px";
    }} onMouseLeave={()=>{
        document.querySelector("#temperate_icon").style.width = "81px";
    }}>
    <div className="location_icons">
        <img id="temperate_icon" src={temperate} />
    </div>
    <div className="location_title"><Header color={"#FFF"} text={"temperate"} /></div>
</div>

<div className="location" onClick={()=>{
       data.location = "polar";
       ChangeData(data);
       Router.push("/GamePage3");
    }} onMouseEnter={()=>{
        document.querySelector("#polar_icon").style.width = "132px";
    }} onMouseLeave={()=>{
        document.querySelector("#polar_icon").style.width = "112px";
    }}>
    <div className="location_icons">
        <img id="polar_icon" src={polar} />
    </div>
    <div className="location_title"><Header color={"#FFF"} text={"polar"} /></div>
</div>

</div>
}

GamePage2.defaultProps = {
    tropical:Tropical,
    temperate:Temperate,
    polar:Polar,
    backbtn:backBtn
}

export default GamePage2;