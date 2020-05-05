import React, { useState } from 'react';
import Link from 'next/link';
import './meetpage.css';
import CustomButton from '../../comps/CustomButton';
import Menu from '../../comps/Menu';
import Header from '../../comps/Header';

// const sharkRectangle = require('./SVG/Rectangle.svg');
const sharkSilhouette = require('./SVG/Shark_Silhouette.svg');
const sharkLocation = require('./SVG/Snowflake.svg');
const sharkStatus = require('./SVG/Status_Icons.svg');
const safeStatus = require('./SVG/safe.svg');
const endangeredStatus = require('./SVG/endangered.svg');
const extinctStatus = require('./SVG/extinct.svg');
const sharkResult = require('./SVG/sharky1.svg');
const backBtn = require('./SVG/back_btn.svg');

const MeetPage = ({sharksilhouette, sharklocation,sharkstatus,safestatus, endangeredstatus, extinctstatus, sharkresult, backbtn}) => {
    const [color, setColor] = useState("#00D2AE");

    return <div className="meet_page">
        <Menu />
        <Link href="/GamePage3"><div id="back_btn"><img src={backbtn} /></div></Link>
        <div id="headers">
            <Header text={"Meet Your Shark!"} fontSize={"40px"} color={"#FFF"}/>
            <div className="shark_result"><img id="shark_result_img" src={sharkresult} /></div>
            {/* <div className="shark_rectangle"><img src={sharkrectangle} /></div> */}
            <div id="shark_name"><Header text={"Shark Name"} fontSize={"40px"} color={"#FFF"}/></div>
        </div>

        <div id="results">
            <div id="sections">
                <div className="shark_section">
                    <img id="shark_size" src={sharksilhouette} />
                    <Header text={"Small"} fontSize={"30px"} color={"#FFF"}/>
                </div>
                <div className="shark_location">
                    <img id="location" src={sharklocation} />
                    <Header text={"Polar"} fontSize={"30px"} color={"#FFF"}/>
                </div>
                <div className="shark_status">
                    <img id="status" src={safestatus} width={"85px"} />
                    <Header text={"Safe"} fontSize={"30px"} color={"#FFF"}/>
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
    // sharkrectangle:sharkRectangle,
    sharksilhouette:sharkSilhouette,
    sharklocation:sharkLocation,
    sharkstatus:sharkStatus,
    safestatus:safeStatus,
    endangeredstatus:endangeredStatus,
    extinctstatus:extinctStatus,
    sharkresult:sharkResult,
    backbtn:backBtn,
}

export default MeetPage;
