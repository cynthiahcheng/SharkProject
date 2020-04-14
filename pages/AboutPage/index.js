import React, {useState} from 'react';
import './aboutpage.css';
import CustomButton from '../../comps/CustomButton';

const AboutPage = ({}) => {
    const [color,setColor] = useState("#00D2AE");

    return <div className="about_page">
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