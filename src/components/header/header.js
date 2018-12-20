import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './header.css';

const Header = () => {
    const title = 'Application for display images';

    return (
        <AppBar position="static">
            <span className='header-title'>
                {title}
            </span>
        </AppBar>
    )
};

export default Header