import React, {useState} from 'react';
import './titlepage.css';
import CustomButton from '../../comps/CustomButton';

const TitlePage = ({}) => {
    const [color, setColor] = useState("#00D2AE");
    const [tutcolor, setTutColor] = useState("#5A9DFF");

    return <div className="title_page">
        <div id="tutorial_button">
            <CustomButton color={tutcolor} text={"TUTORIAL"} onClick={()=>{
                var new_color = "#999";
                setTutColor(new_color);
                }} />
        </div>
        <div id="start_button">
            <CustomButton color={color} text={"START"} fontsize={"90pt"} onClick={()=>{
                var new_color = "#999";
                setColor(new_color);
                }} />
        </div>
    </div>
}

export default TitlePage;