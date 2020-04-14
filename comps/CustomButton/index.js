import React from 'react';
import './cb.css';

require('typeface-sniglet');

const CustomButton = ({text, color, fontsize, onClick}) => <div
    style={{backgroundColor:color,boxShadow:"1px 1px 5px" + color, fontSize:fontsize}}
    className="custom_button_box"
    onClick={onClick}
    >
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

function ButtonClick(){
}

CustomButton.defaultProps = {
    text:"Default",
    color:"#00D2AE",
    fontsize:"50pt",
    onClick:ButtonClick
}

export default CustomButton;