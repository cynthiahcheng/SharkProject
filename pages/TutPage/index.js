import React, {useState} from 'react';
import Link from 'next/link';
import './tutpage.css';
import CustomButton from '../../comps/CustomButton';

const Logo = require('./SVG/Logo_Shark.svg');
const PageOne = require('./SVG/page_1.svg');
const PageTwo = require('./SVG/page_two.svg');
const PageThree = require('./SVG/page_3.svg');
const PageFour = require('./SVG/page_4.svg');

const TutPage = ({logo, page_one, page_two, page_three,page_four}) => {
    const [color, setColor] = useState("#00D2AE");
    const [tutcolor, setTutColor] = useState("#5A9DFF");

    return <div className="tutorial_page">
        <div className="logo">
            <img id="shark_logo" src={logo} />
        </div>
        <div className="tut_header_box">
            <div className="tut_header" id="conserva">Conserva</div>
            <div className="tut_header" id="shark">Shark</div>
        </div>
        <div className="sub_header_text">
            Pick one option on each screen to learn about a shark!
        </div>

        <div className="gamepages">
            <img id="page_1" src={page_one} />
            <div className="body_text">On page 1, pick how big or small the shark is.</div>
        </div>

        <div className="gamepages">
            <div><img id="page_2" src={page_two} /></div>
            <div className="body_text">On page 2, pick where the shark lives.</div>
        </div>

        <div className="gamepages">
            <img id="page_3" src={page_three} />
            <div className="body_text">On page 3, pick the endangered status of the shark.</div>
        </div>

        <div className="gamepages">
            <img id="page_4" src={page_four} />
            <div className="body_text">The last page will reveal the shark you picked.</div>
        </div>

        <div className="sub_header_text">
            You can always try again to see a new shark!
        </div>

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
    logo:Logo,
    page_one:PageOne,
    page_two:PageTwo,
    page_three:PageThree,
    page_four:PageFour,
}

export default TutPage;
