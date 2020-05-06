import React, { useState } from 'react';
import Link from 'next/link';
import './meetpage.css';
import CustomButton from '../../comps/CustomButton';
import Menu from '../../comps/Menu';
import Header from '../../comps/Header';

import {data, ChangeData} from '../data';
console.log(data);

const backBtn = require('./SVG/back_btn.svg');

const sharkSize = require('./SVG/Small_Shark.svg');

const sharkLocation1 = require('./SVG/Tropical.svg');
const sharkLocation2 = require('./SVG/Temperate.svg');
const sharkLocation3 = require('./SVG/Polar.svg');

const safeStatus = require('./SVG/safe.svg');
const endangeredStatus = require('./SVG/endangered.svg');
const extinctStatus = require('./SVG/extinct.svg');

const sharkResult1 = require('./SVG/sharky1.svg');
const sharkResult2 = require('./SVG/sharky2.svg');
const sharkResult3 = require('./SVG/sharky3.svg');

const MeetPage = ({backbtn, sharksize, 
    sharklocation1, sharklocation2, sharklocation3,
    safestatus, endangeredstatus, extinctstatus, 
    sharkresult1, sharkresult2, sharkresult3}) => {
    const [color, setColor] = useState("#00D2AE");

    return <div className="meet_page">
        <Menu />
        <Link href="/GamePage3"><div id="back_btn"><img src={backbtn} /></div></Link>
        <div id="headers">
            <Header text={"Meet Your Shark!"} fontSize={"40px"} color={"#FFF"}/>
            <div className="shark_result"><img id="shark_result_img" src={sharkresult1} /></div>
            <div id="shark_name"><Header text={"Shark Name"} fontSize={"40px"} color={"#FFF"}/></div>
        </div>

        <div id="results">
            {/* <div id="sections">
                <div className="shark_section">
                    <img id="shark_size" src={sharksize} width={"85px"} />
                    <Header text={"Small"} fontSize={"30px"} color={"#FFF"}/>
                </div>
                <div className="shark_location">
                    <img id="location" src={sharklocation1} width={"85px"} />
                    <Header text={"Polar"} fontSize={"30px"} color={"#FFF"}/>
                </div>
                <div className="shark_status">
                    <img id="status" src={safestatus} width={"85px"} />
                    <Header text={"Safe"} fontSize={"30px"} color={"#FFF"}/>
                </div>
            </div> */}
            <div id="sections">
                <div className="sections_inner">
                    <div className="sections_img"><img id="shark_size" src={sharksize} width={"85px"} /></div>
                    <div className="sections_img"><img id="location" src={sharklocation3} width={"85px"} /></div>
                    <div className="sections_img"><img id="status" src={safestatus} width={"85px"} /></div>
                </div>
                <div className="sections_inner">
                    <div className="sections_text" id="size_text"><Header text={"Small"} fontSize={"30px"} color={"#FFF"}/></div>
                    <div className="sections_text" id="location_text"><Header text={"Polar"} fontSize={"30px"} color={"#FFF"}/></div>
                    <div className="sections_text" id="status_text"><Header text={"Safe"} fontSize={"30px"} color={"#FFF"}/></div>
                </div>
            </div>

            <div id="fun_fact">
                <Header text={"A fun fact about this specific shark"} color={"#FFF"} fontSize={"30px"} />
            </div>
            <div id="desc">
                <p>This shark lives in the tropics and usually lives to 500 years old. Vivamus orci dolor, porta vel velit et, bibendum sollicitudin mauris. Donec blandit, massa id malesua eleifend, nulla arcu lacinia metus. Sharks are an endangered species. Vivamus orci dolor, porta vel velit et, bibendum sollicitudin mauris. Donec blandit, massa id malesua eleifend, nulla arc.</p>
            </div>
            <div id="help_button">
                <Link href="/HelpPage"><CustomButton color={color} text={"HOW YOU CAN HELP"} fontsize={"30px"} onClick={() => {
                    var new_color = "#999";
                    setColor(new_color);
                }} /></Link>
            </div>
            </div>
        </div>
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
    
    sharkresult1:sharkResult1,
    sharkresult2:sharkResult2,
    sharkresult3:sharkResult3,
}

export default MeetPage;
