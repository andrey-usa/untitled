import React from 'react';
import HeaderMenuItem from "./HeaderMenuItem";

function HeaderMenu(props) {
    return <ul>
        {props.HeaderMenuItems.map((el, i) => <HeaderMenuItem key = {i} item = {el} />)}
    </ul>;
}

export default HeaderMenu;