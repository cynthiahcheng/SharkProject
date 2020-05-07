import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import './meetpage.css';
import CustomButton from '../../comps/CustomButton';
import Menu from '../../comps/Menu';
import Header from '../../comps/Header';

import {data, ChangeData} from '../../data';
console.log(data);

const backBtn = require('./SVG/back_btn.svg');

const sharkSize = require('./SVG/Small_Shark.svg');

const sharkLocation1 = require('./SVG/Tropical.svg');
const sharkLocation2 = require('./SVG/Temperate.svg');
const sharkLocation3 = require('./SVG/Polar.svg');

const safeStatus = require('./SVG/safe.svg');
const endangeredStatus = require('./SVG/endangered.svg');
const extinctStatus = require('./SVG/extinct.svg');

const sharkResult0 = require('./SVG/sharky1.svg');
const sharkResult1 = require('./SVG/catshark.svg');
const sharkResult2 = require('./SVG/dogfish.svg');
const sharkResult3 = require('./SVG/lanternshark.svg');


const MeetPage = ({backbtn, sharksize, 
    sharklocation1, sharklocation2, sharklocation3,
    safestatus, endangeredstatus, extinctstatus, 
    sharkresult0, sharkresult1, sharkresult2, sharkresult3}) => {
    const [color, setColor] = useState("#00D2AE");
    const [sharksrc, setShark] = useState(sharkresult0);
    const [sharkname, setName] = useState("Shark Name");
    const [area, setArea] = useState(sharklocation1);
    const [health, setHealth] = useState(safestatus);
    const [sizetext, setSizeText] = useState("small");
    const [areatext, setAreaText] = useState("tropical");
    const [healthtext, setHealthText] = useState("safe");

    // useEffect(()=>{
    //     setTimeout(()=>{
    //     document.querySelector(".meet_page").style.opacity="100%";
    //     document.querySelector(".meet_page").style.transition="opacity, linear";
    //     document.querySelector(".shark_result_img").style.left=0;
    //     }, 500);
    // }, []);

    return <div className="meet_page"> 
        <Menu />
        <Link href="/GamePage3"><div id="back_btn"><img src={backbtn} /></div></Link>
        <div id="headers">
            <Header text={"Meet Your Shark!"} fontSize={"40px"} color={"#FFF"}/>
            <div className="shark_result"><img id="shark_result_img" src={sharksrc} onLoad={() => {
                ChangeShark();
            }}/></div>
            <div id="shark_name"><Header text={sharkname} fontSize={"30px"} color={"#FFF"}/></div>
        </div>

        <div id="results">
            <div id="sections">
                <div className="sections_inner">
                    <div className="sections_img"><img id="shark_size" src={sharksize} width={"85px"} /></div>
                    <div className="sections_img"><img id="location" src={area} width={"85px"} /></div>
                    <div className="sections_img"><img id="status" src={health} width={"85px"} /></div>
                </div>
                <div className="sections_inner">
                    <div className="sections_text" id="size_text"><Header text={sizetext} fontSize={"25px"} color={"#FFF"}/></div>
                    <div className="sections_text" id="location_text"><Header text={areatext} fontSize={"25px"} color={"#FFF"}/></div>
                    <div className="sections_text" id="status_text"><Header text={healthtext} fontSize={"25px"} color={"#FFF"}/></div>
                </div>
            </div>

            <div id="fun_fact">
                <Header text={"A fun fact about this specific shark"} color={"#FFF"} fontSize={"30px"} />
            </div>
            <div id="desc">
                <p id="shark_fact">This shark lives in the tropics and usually lives to 500 years old. Vivamus orci dolor, porta vel velit et, bibendum sollicitudin mauris. Donec blandit, massa id malesua eleifend, nulla arcu lacinia metus. Sharks are an endangered species. Vivamus orci dolor, porta vel velit et, bibendum sollicitudin mauris. Donec blandit, massa id malesua eleifend, nulla arc.</p>
            </div>
            <div id="help_button">
                <Link href="/HelpPage"><CustomButton color={color} text={"HOW YOU CAN HELP"} fontsize={"30px"} onClick={() => {
                    var new_color = "#999";
                    setColor(new_color);
                }} /></Link>
            </div>
            </div>
        </div>


function ChangeShark(){
    if(data.size === "small" && data.location === "tropical" && data.status === "extinct"){
        var new_shark = sharkresult1;
        setShark(new_shark);
        var new_name = "Broadnose Catshark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
    } else if(data.size === "small" && data.location === "temperate" && data.status === "extinct"){
        var new_shark = sharkresult2;
        setShark(new_shark);
        var new_name = "Granular Dogfish Shark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
    } else if(data.size === "small" && data.location === "polar" && data.status === "extinct"){
        var new_shark = sharkresult1;
        setShark(new_shark);
        var new_name = "Iceland Catshark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
    } else if(data.size === "small" && data.location === "tropical" && data.status === "endangered"){
        var new_shark = sharkresult3;
        setShark(new_shark);
        var new_name = "Dwarf Lanternshark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
    }
}

}

MeetPage.defaultProps = {
    backbtn:backBtn,
    sharksize:sharkSize,

    sharklocation1:sharkLocation1,
    sharklocation2:sharkLocation2,
    sharklocation3:sharkLocation3,
    
    safestatus:safeStatus,
    endangeredstatus:endangeredStatus,
    extinctstatus:extinctStatus,
    
    sharkresult0:sharkResult0,
    sharkresult1:sharkResult1,
    sharkresult2:sharkResult2,
    sharkresult3:sharkResult3,
}

export default MeetPage;

// onLoad={() => {
//     if(data.size === "small", data.location === "tropical", data.status === "extinct"){
//         var new_shark = sharkresult2;
//         setShark(new_shark);
//     }
// }}