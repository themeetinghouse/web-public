import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../assets/images/TMH-logo-white.png';
import LocationSearching from '@material-ui/icons/LocationSearching';
import './pageHeader.scss';
import { PageHeaderQuestionBar } from '../PageHeaderQuestionBar/PageHeaderQuestionBar';
import { Identity } from '../Identity/Identity';
import { Button, MuiThemeProvider, AppBar, Toolbar, Typography } from '@material-ui/core';
import { darkTheme } from '../../themes';
import { SiteSelectionDialog } from '../../dialogs/siteSelection/SiteSelectionDialog';

class PageHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            siteSelectionDialogOpen: false
        }
        this.handleCloseSiteSelectionDialog = this.handleCloseSiteSelectionDialog.bind(this);
        this.handleOpenSiteSelectionDialog = this.handleOpenSiteSelectionDialog.bind(this);
    }


    handleOpenSiteSelectionDialog(){
        this.setState({siteSelectionDialogOpen: true});
    }
    handleCloseSiteSelectionDialog(){
        this.setState({siteSelectionDialogOpen: false});
    }

    render(){

        return (
            <div className="page-header">
                <MuiThemeProvider theme={darkTheme}>
                <AppBar position="static" color="secondary">
                    <Toolbar className="toolbar">
                        <Link to="/"><img className="logo" src={logo}></img></Link>
                        <div className="title-site-container">
                            <div className="title">The Meeting House</div>
                            <Button variant="contained" size="small" color="secondary" onClick={this.handleOpenSiteSelectionDialog}>
                                <LocationSearching style={{ fontSize: '1em' }}></LocationSearching>Downtown Toronto
                            </Button>
                        </div>
                    <div className="question-bar">
                        <PageHeaderQuestionBar contextQuestion={this.props.contextQuestion} handleQuestionChanged={this.props.handleQuestionChanged} ></PageHeaderQuestionBar>
                    </div>          
                    <div className="identity-header">
                        <Identity></Identity>
                    </div>
                    </Toolbar>
                </AppBar>
                <SiteSelectionDialog handleClose={this.handleCloseSiteSelectionDialog} open={this.state.siteSelectionDialogOpen}></SiteSelectionDialog>
                </MuiThemeProvider>
            </div>
    
        )
    }
}

export default withRouter(PageHeader);