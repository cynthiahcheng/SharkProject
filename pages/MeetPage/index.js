import React, { useState } from 'react';
import './meetpage.css';
import CustomButton from '../../comps/CustomButton';
import Menu from '../../comps/Menu';

// const sharksilhouette = require('./SVG/Shark_Silhouette.svg');

const MeetPage = ({ }) => {
    const [color, setColor] = useState("#00D2AE");

    return <div className="meet_page">
        <Menu />
        <div className="text">
            <div id="headers">
                <h1>Meet the Shark!</h1> <br></br>
                <h1>Shark Name</h1>
            </div>
            {/* // insert shark shark_silhouette */}
            <div id="fun_fact">
                <h2>A fun fact about this specific shark</h2>
            </div>
            <div id="desc">
                <p>This shark lives in the tropics and usually lives to 500 years old. Vivamus orci dolor, porta vel velit et, bibendum sollicitudin mauris. Donec blandit, massa id malesua eleifend, nulla arcu lacinia metus. Sharks are an endangered species. Vivamus orci dolor, porta vel velit et, bibendum sollicitudin mauris. Donec blandit, massa id malesua eleifend, nulla arc.</p>
            </div>
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
