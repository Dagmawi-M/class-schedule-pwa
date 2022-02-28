import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolb = props => {
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton />
            </div>
            <div className='toolbar_logo'><a href='/'>LOGO</a></div>
            <div className='toolbar_navigation-items'>
                <ul>
                    <li><a href='/'> Settings </a></li>
                    <li><a href='/'> Review </a></li>
                </ul>
                    </div>       
        </nav>
    </header>
}

export default toolb