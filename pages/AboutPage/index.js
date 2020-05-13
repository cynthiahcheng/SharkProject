import React, {useState} from 'react';
import './aboutpage.css';
import Link from 'next/link';
import CustomButton from '../../comps/CustomButton';
import Menu from '../../comps/Menu';

const AboutPage = ({}) => {
    const [color,setColor] = useState("#00D2AE");

    return <div className="about_page" onLoad={()=>{
        window.scrollTo(0,0);
    }}>
            <Menu />
            <div id="about_title">About Us</div>
            <div className="text">
                <p>This app was created by three friends who have a passion for sharks and the ocean.</p>
                <p>After seeing how threatened sharks are becoming, they decided to build an app to educate children — and all who are interested — on sharks, while raising awareness of shark endangerment and promoting shark conservation.</p>
                <p>With this app, they hope to bring to light the current situation for sharks and help any who are wary of sharks to unlearn their misconceptions about this ancient keystone species.</p>
            </div>
                <Link href="/HelpPage"><div id="help_button">
                    <CustomButton color={color} text={"HOW YOU CAN HELP"} fontsize={"30px"} onClick={()=>{
                    var new_color = "#999";
                    setColor(new_color);
                    }} />
                </div></Link>
            </div>
}

AboutPage.defaultProps = {

}

export default AboutPage;