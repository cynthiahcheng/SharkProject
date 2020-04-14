import React, {useState} from 'react';
import './tutpage.css';
import CustomButton from '../../comps/CustomButton';

const TutPage = ({}) => {
    const [color, setColor] = useState("#00D2AE");
    const [tutcolor, setTutColor] = useState("#5A9DFF");

    return <div className="tutorial_page">
        <div className="tut_page_buttons">
        <div id="home_button">
            <CustomButton color={tutcolor} text={"HOME"} onClick={()=>{
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
    </div>
}



TutPage.defaultProps = {

}

export default TutPage;
