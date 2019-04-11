import React from 'react';
import './identity.scss';
import { Button, MuiThemeProvider } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { darkTheme } from '../../themes';

export function Identity(props){
    return (
        <div className="identity">
            <MuiThemeProvider theme={darkTheme}>
            <div className="welcome-container">
                <div className="welcome">Welcome!</div>
                <div className="buttons">
                    <Button color="primary">Sign up</Button>
                    <Button color="primary">Sign in</Button>
                </div>
            </div>
            <div className="avatar">
                <AccountCircle></AccountCircle>
            </div>
            </MuiThemeProvider>
        </div>
    )
}