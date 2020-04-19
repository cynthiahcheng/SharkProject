import React, {useState} from 'react';
import './helppage.css';
import CustomButton from '../../comps/CustomButton';

const HelpPage = ({}) => {
    const [color, setColor] = useState("#00D2AE");

    return <div className="help_page">
                <div className="info">
                    <p>Sharks are an essential marine species that are facing extinction because of overfishing. Sharks need all the help they can get, and it's up to us to help them! If you are interested, here are some websites to start with!</p>
                </div>
                <div className="links">
                    <h3>https://sharksincanada.ca/</h3>
                    <h3>https://sharkstewards.org/</h3>
                    <h3>https://www.wcs.org/our-work/wildlife/sharks-skates-rays</h3>
                </div>
                <div className="thanks">
                    <p>Thanks for using ConservaShark, we hope you enjoyed learning about shark conservation!</p>
                </div>
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