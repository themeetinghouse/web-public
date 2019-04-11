import React from 'react';
import './navBar.scss';
import { Toolbar, Tab, Tabs, MuiThemeProvider, Button, MenuItem, Menu, IconButton } from '@material-ui/core';
import { darkTheme } from '../../themes';
import Bookmark from '@material-ui/icons/Bookmark';
import ChatBubble from '@material-ui/icons/ChatBubble';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';

export class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            anchorEl: null,
        }
        this.handleAddSectionClicked = this.handleAddSectionClicked.bind(this);
        this.handleAddSectionClosed = this.handleAddSectionClosed.bind(this);
    }

    handleAddSectionClicked(event){
        this.setState({ anchorEl: event.currentTarget });
    }
    handleAddSectionClosed(event){
        this.setState({ anchorEl: null });
    }

    render(){

        const anchorEl = this.state.anchorEl;
        return (
            <div className="nav-bar">
                <MuiThemeProvider theme={darkTheme}>
                <Tabs value={this.props.selectedTab} indicatorColor="secondary"  classes={{indicator: 'indicator'}} onChange={this.props.tabChanged}>
                    <Tab className="tab" value="explore" label="Explore"/>
                    <Tab className="tab" value="difference" label="Make a Difference"/>
                    <Tab className="tab" value="teaching" label="Teaching"/>
                    <Tab className="tab" value="kids" label="Kids &amp; Youth"/>
                    <Tab className="tab" value="community" label="Community"/>
                    <Button size="small" onClick={this.handleAddSectionClicked}>+ add section</Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleAddSectionClosed}
                    >
                        <MenuItem onClick={this.handleAddSectionClosed}><Bookmark></Bookmark>&nbsp;Explore</MenuItem>
                        <MenuItem onClick={this.handleAddSectionClosed}><Bookmark></Bookmark>&nbsp;Make a Difference</MenuItem>
                        <MenuItem onClick={this.handleAddSectionClosed}><BookmarkBorder></BookmarkBorder>&nbsp;Discussion</MenuItem>
                        <MenuItem onClick={this.handleAddSectionClosed}><Bookmark></Bookmark>&nbsp;Teaching</MenuItem>
                        <MenuItem onClick={this.handleAddSectionClosed}><Bookmark></Bookmark>&nbsp;Kids & Youth</MenuItem>
                        <MenuItem onClick={this.handleAddSectionClosed}><Bookmark></Bookmark>&nbsp;Community</MenuItem>
                        <MenuItem onClick={this.handleAddSectionClosed}><BookmarkBorder></BookmarkBorder>&nbsp;Bible</MenuItem>
                        <MenuItem onClick={this.handleAddSectionClosed}><BookmarkBorder></BookmarkBorder>&nbsp;Prayer</MenuItem>
                        <MenuItem onClick={this.handleAddSectionClosed}><BookmarkBorder></BookmarkBorder>&nbsp;About Us</MenuItem>
                    </Menu>
                </Tabs>
                <Button className="conversation-toggle-button" color="secondary" onClick={this.props.handleToggleConversation}><ChatBubble></ChatBubble><div className="conversation-toggle-label">Community<br/>Connector</div></Button>
                </MuiThemeProvider>
            </div>
        )
    }
}