import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import './gamepage.css';
import Header from '../../comps/Header';
import Menu from '../../comps/Menu';

import {data, ChangeData} from '../../data';
import Router from 'next/router';
console.log(data);

const smallShark = require('./SVG/Small_Shark.svg');
const medShark = require('./SVG/Med_Shark.svg');
const largeShark = require('./SVG/Large_Shark.svg');
const backBtn = require('./SVG/back_btn.svg');


const GamePage = ({smallshark, medshark, largeshark, backbtn}) => {

    useEffect(()=>{
        document.querySelector("#small_icon").style.transition="opacity 1s";
        document.querySelector("#med_icon").style.transition="opacity 1.5s";
        document.querySelector("#large_icon").style.transition="opacity 2s";
        document.querySelector("#pick_shark").style.transition="0.75s ease-out";
        setTimeout(()=>{
        document.querySelector("#small_icon").style.opacity="100%";
        document.querySelector("#med_icon").style.opacity="100%";
        document.querySelector("#large_icon").style.opacity="100%";
        document.querySelector("#pick_shark").style.left="0";
        }, 100);
    }, []);

return <div className="game_page">
    <Menu />
    <Link href="/index"><div id="back_btn"><img src={backbtn} /></div></Link>
    <div id="pick_shark"><Header color={"#FFF"} text={"1. Pick the size of your shark."} /></div>
    
    <div className="size" onClick={()=>{
        data.size = "small";
        ChangeData(data);
        Router.push("/GamePage2");
    }} onMouseEnter={()=>{
        document.querySelector("#small_icon").style.width = "120px";
    }} onMouseLeave={()=>{
        document.querySelector("#small_icon").style.width = "100px";
    }}>
        <div className="shark_shadows" >
            <img id="small_icon" src={smallshark} />
        </div>
        <div className="shark_sizes"><Header color={"#FFF"} text={"small"} /></div>
    </div>

    <div className="size" onClick={()=>{
        data.size = "medium";
        ChangeData(data);
        Router.push("/GamePage2");
    }} onMouseEnter={()=>{
        document.querySelector("#med_icon").style.width = "215px";
    }} onMouseLeave={()=>{
        document.querySelector("#med_icon").style.width = "195px";
    }}>
        <div className="shark_shadows">
            <img id="med_icon" src={medshark} />
        </div>
        <div className="shark_sizes"><Header color={"#FFF"} text={"medium"} /></div>
    </div>

    <div className="size" onClick={()=>{
        data.size = "large";
        ChangeData(data);
        Router.push("/GamePage2");
    }} onMouseEnter={()=>{
        document.querySelector("#large_icon").style.width = "290px";
    }} onMouseLeave={()=>{
        document.querySelector("#large_icon").style.width = "270px";
    }}>
        <div className="shark_shadows">
            <img id="large_icon" src={largeshark} />
        </div>
        <div className="shark_sizes"><Header color={"#FFF"} text={"large"} /></div>
    </div>
    </div>

}

GamePage.defaultProps = {
    smallshark:smallShark,
    medshark:medShark,
    largeshark:largeShark,
    backbtn:backBtn
}

export default GamePage;