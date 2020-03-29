import React from 'react';
import './App.css'
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {

    const mainTitle = 'Car Parts';
    const HeaderMenuItems = [

        {title: 'Home'},
        {title: 'Order parts'},
        {title: 'Shipping'},
        {title: 'Deals'},
    ];
    const FooterMenuItems = [

        {title: 'Payment'},
        {title: 'COVID-19 information'},
        {title: 'Careers'},
        {title: 'Contact'},


    ];

    return (
        <div className="App">
            <Header
                title={mainTitle}
                HeaderMenuItems={HeaderMenuItems}

            />
            <h1>Car parts, covid free</h1>

            <Footer

                FooterMenuItems={FooterMenuItems}

            />
        </div>
    );
}

export default App;
