import React from 'react';
import './Footer.css'


function FooterMenuItem(props) {
    return<div className="Footer">{props.item.title}</div>;
}

export default FooterMenuItem;
