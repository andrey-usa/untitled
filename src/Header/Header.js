import React from 'react';
import HeaderMenu from './HeaderMenu';

function Header(props) {

    return <strong>{props.title}



        <HeaderMenu HeaderMenuItems={props.HeaderMenuItems} />

        </strong>
}

export default Header;
