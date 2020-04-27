import React, {useState} from 'react';
import './titlepage.css';
import CustomButton from '../../comps/CustomButton';

const Logo = require('./Logo_Shark.svg');

const TitlePage = ({logo}) => {
    const [color, setColor] = useState("#00D2AE");
    const [tutcolor, setTutColor] = useState("#5A9DFF");

    return <div className="title_page">
        <div className="logo">
            <img id="shark_logo" src={logo} />
        </div>
        <div className="tut_header_box">
            <div className="tut_header" id="conserva">Conserva</div>
            <div className="tut_header" id="shark">Shark</div>
        </div>
        <div className="sub_header_text">
            A children's educational app about shark conservation.
        </div>

        <div id="tutorial_button">
            <CustomButton color={tutcolor} text={"TUTORIAL"} onClick={()=>{
                var new_color = "#999";
                setTutColor(new_color);
                }} />
        </div>
        <div id="start_button">
            <CustomButton color={color} text={"START"} fontsize={"90px"} onClick={()=>{
                var new_color = "#999";
                setColor(new_color);
                }} />
        </div>
    </div>
}

TitlePage.defaultProps = {
    logo:Logo
}

export default TitlePage;