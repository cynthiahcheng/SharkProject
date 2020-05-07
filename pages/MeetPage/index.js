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
const sharkResult4 = require('./SVG/blacktip.svg');
const sharkResult5 = require('./SVG/pygmy.svg');
const sharkResult6 = require('./SVG/sawshark.svg');
const sharkResult7 = require('./SVG/otodus.svg');
const sharkResult8 = require('./SVG/zebra.svg');
const sharkResult9 = require('./SVG/hammerhead.svg');
const sharkResult10 = require('./SVG/hammerhead2.svg');
const sharkResult11 = require('./SVG/porbeagle.svg');
const sharkResult12 = require('./SVG/greyreef.svg');
const sharkResult13 = require('./SVG/bullshark.svg');
const sharkResult14 = require('./SVG/salmonshark.svg');
const sharkResult15 = require('./SVG/megamouth.svg');
const sharkResult16 = require('./SVG/thresher.svg');
const sharkResult17 = require('./SVG/baskingshark.svg');
const sharkResult18 = require('./SVG/whaleshark.svg');
const sharkResult19 = require('./SVG/greatwhite.svg');
const sharkResult20 = require('./SVG/pacificsleeper.svg');
const sharkResult21 = require('./SVG/tigershark.svg');
const sharkResult22 = require('./SVG/bluntnoseshark.svg');
const sharkResult23 = require('./SVG/greenland.svg');

const MeetPage = ({backbtn, sharksize, 
    sharklocation1, sharklocation2, sharklocation3,
    safestatus, endangeredstatus, extinctstatus, 
    sharkresult0, sharkresult1, sharkresult2, sharkresult3, sharkresult4, 
    sharkresult5, sharkresult6, sharkresult7, sharkresult8, sharkresult9,
    sharkresult10, sharkresult11, sharkresult12, sharkresult13, sharkresult14,
    sharkresult15, sharkresult16, sharkresult17, sharkresult18, sharkresult19,
    sharkresult20, sharkresult21, sharkresult22, sharkresult23}) => {
    const [color, setColor] = useState("#00D2AE");
    const [sharksrc, setShark] = useState(sharkresult0);
    const [sharkname, setName] = useState("Shark Name");
    const [area, setArea] = useState(sharklocation1);
    const [health, setHealth] = useState(safestatus);
    const [sizetext, setSizeText] = useState("small");
    const [areatext, setAreaText] = useState("tropical");
    const [healthtext, setHealthText] = useState("safe");

    useEffect(()=>{
        document.querySelector("#shark_result_img").style.transition="all 0.75s";
        setTimeout(()=>{
        document.querySelector("#shark_result_img").style.opacity="100%";
        }, 200);
    }, []);

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
    }else if(data.size === "small" && data.location === "temperate" && data.status === "extinct"){
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
    }else if(data.size === "small" && data.location === "polar" && data.status === "extinct"){
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
    }else if(data.size === "small" && data.location === "tropical" && data.status === "endangered"){
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
    }else if(data.size === "small" && data.location === "temperate" && data.status === "endangered"){
        var new_shark = sharkresult2;
        setShark(new_shark);
        var new_name = "Spiny Dogfish";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
    }else if(data.size === "small" && data.location === "polar" && data.status === "endangered"){
        var new_shark = sharkresult3;
        setShark(new_shark);
        var new_name = "African Lanternshark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
    }else if(data.size === "small" && data.location === "tropical" && data.status === "safe"){
        var new_shark = sharkresult4;
        setShark(new_shark);
        var new_name = "Blacktip Reef Shark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
    }else if(data.size === "small" && data.location === "temperate" && data.status === "safe"){
        var new_shark = sharkresult5;
        setShark(new_shark);
        var new_name = "Spined Pygmy Shark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
    }else if(data.size === "small" && data.location === "polar" && data.status === "safe"){
        var new_shark = sharkresult1;
        setShark(new_shark);
        var new_name = "Pale Catshark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
    }else if(data.size === "medium" && data.location === "tropical" && data.status === "extinct"){
        var new_shark = sharkresult6;
        setShark(new_shark);
        var new_name = "Sawshark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
    }else if(data.size === "medium" && data.location === "temperate" && data.status === "extinct"){
        var new_shark = sharkresult7;
        setShark(new_shark);
        var new_name = "Otodus Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
    }else if(data.size === "medium" && data.location === "polar" && data.status === "extinct"){
        var new_shark = sharkresult8;
        setShark(new_shark);
        var new_name = "Zebra Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
    }else if(data.size === "medium" && data.location === "tropical" && data.status === "endangered"){
        var new_shark = sharkresult9;
        setShark(new_shark);
        var new_name = "Great Hammerhead";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
    }else if(data.size === "medium" && data.location === "temperate" && data.status === "endangered"){
        var new_shark = sharkresult10;
        setShark(new_shark);
        var new_name = "Smalleye Hammerhead";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
    }else if(data.size === "medium" && data.location === "polar" && data.status === "endangered"){
        var new_shark = sharkresult11;
        setShark(new_shark);
        var new_name = "Porbeagle Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
    }else if(data.size === "medium" && data.location === "tropical" && data.status === "safe"){
        var new_shark = sharkresult12;
        setShark(new_shark);
        var new_name = "Grey Reef Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
    }else if(data.size === "medium" && data.location === "temperate" && data.status === "safe"){
        var new_shark = sharkresult13;
        setShark(new_shark);
        var new_name = "Bull Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
    }else if(data.size === "medium" && data.location === "polar" && data.status === "safe"){
        var new_shark = sharkresult14;
        setShark(new_shark);
        var new_name = "Salmon Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
    }else if(data.size === "large" && data.location === "tropical" && data.status === "extinct"){
        var new_shark = sharkresult15;
        setShark(new_shark);
        var new_name = "Megamouth Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
    }else if(data.size === "large" && data.location === "temperate" && data.status === "extinct"){
        var new_shark = sharkresult16;
        setShark(new_shark);
        var new_name = "Thresher Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
    }else if(data.size === "large" && data.location === "polar" && data.status === "extinct"){
        var new_shark = sharkresult17;
        setShark(new_shark);
        var new_name = "Basking Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
    }else if(data.size === "large" && data.location === "tropical" && data.status === "endangered"){
        var new_shark = sharkresult18;
        setShark(new_shark);
        var new_name = "Whale Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endagered";
        setHealthText(new_healthtext);
    }else if(data.size === "large" && data.location === "temperate" && data.status === "endangered"){
        var new_shark = sharkresult19;
        setShark(new_shark);
        var new_name = "Great White Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endagered";
        setHealthText(new_healthtext);
    }else if(data.size === "large" && data.location === "polar" && data.status === "endangered"){
        var new_shark = sharkresult20;
        setShark(new_shark);
        var new_name = "Pacific Sleeper Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endagered";
        setHealthText(new_healthtext);
    }else if(data.size === "large" && data.location === "tropical" && data.status === "safe"){
        var new_shark = sharkresult21;
        setShark(new_shark);
        var new_name = "Tiger Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
    }else if(data.size === "large" && data.location === "temperate" && data.status === "safe"){
        var new_shark = sharkresult22;
        setShark(new_shark);
        var new_name = "Bluntnose Sixgill Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
    }else if(data.size === "large" && data.location === "polar" && data.status === "safe"){
        var new_shark = sharkresult23;
        setShark(new_shark);
        var new_name = "Greenland Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
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
    sharkresult4:sharkResult4,
    sharkresult5:sharkResult5,
    sharkresult6:sharkResult6,
    sharkresult7:sharkResult7,
    sharkresult8:sharkResult8,
    sharkresult9:sharkResult9,
    sharkresult10:sharkResult10,
    sharkresult11:sharkResult11,
    sharkresult12:sharkResult12,
    sharkresult13:sharkResult13,
    sharkresult14:sharkResult14,
    sharkresult15:sharkResult15,
    sharkresult16:sharkResult16,
    sharkresult17:sharkResult17,
    sharkresult18:sharkResult18,
    sharkresult19:sharkResult19,
    sharkresult20:sharkResult20,
    sharkresult21:sharkResult21,
    sharkresult22:sharkResult22,
    sharkresult23:sharkResult23,
}

export default MeetPage;

// onLoad={() => {
//     if(data.size === "small", data.location === "tropical", data.status === "extinct"){
//         var new_shark = sharkresult2;
//         setShark(new_shark);
//     }
// }}