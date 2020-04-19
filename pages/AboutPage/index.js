import React, {useState} from 'react';
import './aboutpage.css';
import CustomButton from '../../comps/CustomButton';
import Menu from '../../comps/Menu';
import Header from '../../comps/Header';

const AboutPage = ({}) => {
    const [color,setColor] = useState("#00D2AE");

    return <div className="about_page">
            <div className="text">
                <p>This app was created by three friends who have a passion for sharks and the ocean. After seeing how threatened sharks are becoming, they decided to build an app to educate all ages (but especially children) on shark endangerment and conservation. With this app, they hope to bring to light the current situation for sharks and help any who are wary of sharks to unlearn their misconceptions about this ancient keystone species.</p>
            </div>
                <div id="help_button">
                    <CustomButton color={color} text={"HOW YOU CAN HELP"} fontsize={"30pt"} onClick={()=>{
                    var new_color = "#999";
                    setColor(new_color);
                    }} />
                </div>
            </div>
}

AboutPage.defaultProps = {

}

export default AboutPage;