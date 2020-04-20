import React, {useState} from 'react';
import Link from 'next/link';
import './tutpage.css';
import CustomButton from '../../comps/CustomButton';

const TutPage = ({}) => {
    const [color, setColor] = useState("#00D2AE");
    const [tutcolor, setTutColor] = useState("#5A9DFF");

    return <div className="tutorial_page">
        <div className="tut_page_buttons">
        <div id="home_button">
            <Link href="/index"><CustomButton color={tutcolor} text={"HOME"} onClick={()=>{
                var new_color = "#999";
                setTutColor(new_color);
                }} /></Link>
        </div>
        <div id="start_button">
            <Link href="/GamePage"><CustomButton color={color} text={"START"} fontsize={"90px"} onClick={()=>{
                var new_color = "#999";
                setColor(new_color);
                }} /></Link>
        </div>
        </div>
    </div>
}



TutPage.defaultProps = {

}

export default TutPage;
