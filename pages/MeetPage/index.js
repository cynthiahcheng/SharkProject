import React, { useState } from 'react';
import './meetpage.css';
import CustomButton from '../../comps/CustomButton';
import Menu from '../../comps/Menu';

const sharkPhoto = require('./SVG/Shark_Photo.svg')
const sharkSilhouette = require('./SVG/Shark_Silhouette.svg');
const sharkLocation = require('./SVG/Snowflake.svg')
const sharkStatus = require('./SVG/Status_Icons.svg')

const MeetPage = ({ }) => {
    const [color, setColor] = useState("#00D2AE");

    return <div className="meet_page">
        <Menu />
        <div id="headers">
            <h1>Meet the Shark!</h1>
            <div className="shark_photo"><img src={sharkPhoto} /></div>
            <h1>Shark Name</h1>
        </div>
        <div id="results">
        <div className="shark_silhuette"><img src={sharkSilhouette} text={"Small"} /></div>
        <div className="shark_location"><img src={sharkLocation} text={"Polar"} /></div>
        <div className="shark_status"><img src={sharkStatus} text={"Safe"} /></div>
        </div>
        <div id="fun_fact">
            <h2>A fun fact about this specific shark</h2>
        </div>
        <div id="desc">
            <p>This shark lives in the tropics and usually lives to 500 years old. Vivamus orci dolor, porta vel velit et, bibendum sollicitudin mauris. Donec blandit, massa id malesua eleifend, nulla arcu lacinia metus. Sharks are an endangered species. Vivamus orci dolor, porta vel velit et, bibendum sollicitudin mauris. Donec blandit, massa id malesua eleifend, nulla arc.</p>
        </div>
        <div id="help_button">
            <CustomButton color={color} text={"HOW YOU CAN HELP"} fontsize={"30pt"} onClick={() => {
                var new_color = "#999";
                setColor(new_color);
            }} />
        </div>
        </div>
}

MeetPage.defaultProps = {

}

export default MeetPage;
