import React from 'react';
import './Footer.css';
import FooterMenu from './FooterMenu';

function Footer(props) {

    return <strong>

        <FooterMenu FooterMenuItems={props.FooterMenuItems} />

        </strong>
}

export default Footer;
