import React, {useState} from 'react';
import Link from 'next/link';
import './respage.css';
import CustomButton from '../../comps/CustomButton';

const ResPage = ({}) => {
    const [color,setColor] = useState("#00D2AE");

    return <div className="results_page">
                <div id="go_home_button">
                    <Link href="/HelpPage"><CustomButton color={color} text={"HOW YOU CAN HELP"} fontsize={"30pt"} onClick={()=>{
                    var new_color = "#999";
                    setColor(new_color);
                    }} /></Link>
                </div>
            </div>
}


ResPage.defaultProps = {

}

export default ResPage;
