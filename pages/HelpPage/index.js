import React, {useState} from 'react';
import './helppage.css';
import CustomButton from '../../comps/CustomButton';

const HelpPage = ({}) => {
    const [color, setColor] = useState("#00D2AE");

    return <div className="help_page">
                <div id="go_home_button">
                    <CustomButton color={color} text={"RETURN TO HOME"} fontsize={"30pt"} onClick={()=>{
                    var new_color = "#999";
                    setColor(new_color);
                    }} />
                </div>
            </div>
}


HelpPage.defaultProps = {

}

export default HelpPage;