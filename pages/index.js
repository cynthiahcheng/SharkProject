import React, {useState} from 'react';
import Link from 'next/link';
import './index.css';
import CustomButton from '../comps/CustomButton';

const Index = () => {
    const [color, setColor] = useState("#00D2AE");
    const [tutcolor, setTutColor] = useState("#5A9DFF");

return <div className="title_page">
    <div id="tutorial_button">
            <Link href="/TutPage"><CustomButton color={tutcolor} text={"TUTORIAL"} onClick={()=>{
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
}

export default Index;