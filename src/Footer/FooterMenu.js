import React from 'react';
import FooterMenuItem from "./FooterMenuItem";

function FooterMenu(props) {
    return <ul>
        {props.FooterMenuItems.map((el, i) => <FooterMenuItem key = {i} item = {el} />)}
    </ul>;
}

export default FooterMenu;
