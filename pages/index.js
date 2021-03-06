import React, {useState} from 'react';
import Link from 'next/link';
import './index.css';
import CustomButton from '../comps/CustomButton';

import {data, ChangeData} from '../data';

console.log(data);

const Logo = require('./TitlePage/Logo_Shark.svg');

const Index = ({logo}) => {
    const [color, setColor] = useState("#00D2AE");
    const [tutcolor, setTutColor] = useState("#5A9DFF");

return <div className="title_page" onLoad={()=>{
    window.scrollTo(0,0);
}}>
    <div className="logo">
            <img id="shark_logo" src={logo} />
        </div>
        <div className="tut_header_box">
            <div className="tut_header" id="conserva">Conserva</div>
            <div className="tut_header" id="shark">Shark</div>
        </div>
        <div className="sub_header">
            <div className="sub_header_text">A children's educational app about sharks and shark conservation</div>
        </div>

    <div id="tutorial_button">
            <Link href="/TutPage"><CustomButton color={tutcolor} text={"TUTORIAL"} onClick={()=>{
                // ChangeData({
                //     lastaction:"change this"
                // })
                var new_color = "#999";
                setTutColor(new_color);
                }} /></Link>
        </div>
        <div id="start_button">
            <Link href="/GamePage"><CustomButton color={color} text={"START"} fontsize={"90px"} onClick={()=>{
                // ChangeData({
                //    lastaction:"change this"
                // })
                var new_color = "#999";
                setColor(new_color);
                }} /></Link>
        </div>

</div>
}

Index.defaultProps = {
    logo:Logo
}

export default Index;