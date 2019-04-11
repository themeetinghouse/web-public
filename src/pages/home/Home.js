import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeExplore from '../homeExplore/HomeExplore';
import PageHeader from '../../components/PageHeader/PageHeader';
import { NavBar } from '../../components/NavBar';
import { OrganizeBy } from '../../components/OrganizeBy';
import './home.scss';
import { HomeBible } from '../homeBible/HomeBible';
import { HomeTeaching } from '../homeTeaching/HomeTeaching';
import { HomeDifference } from '../homeDifference/HomeDifference';
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import { Drawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText, Button, MuiThemeProvider, Select, MenuItem, Card, CardContent, Avatar, CardHeader } from '@material-ui/core';
import CommunityConnectorImage from '../../assets/images/community-connector.png';
import { darkTheme } from '../../themes';
import { HomeCommunity } from '../homeCommunity/HomeCommunity';
import { HomeKids } from '../homeKids/HomeKids';


export class Home extends React.Component {

    conversations = [
        {
            id: 1,
            author: "Curtis Miles",
            timestamp: "March 10, 2019 @ 9:15pm",
            content: "commented on the teaching ‘WEEK 4: You’ve Been Found’ from the series ‘Honest to God’",
        },
        {
            id: 2,
            author: "Curtis Miles",
            timestamp: "March 10, 2019 @ 9:15pm",
            content: "commented on the teaching ‘WEEK 4: You’ve Been Found’ from the series ‘Honest to God’",
        },
        {
            id: 3,
            author: "Curtis Miles",
            timestamp: "March 10, 2019 @ 9:15pm",
            content: "commented on the teaching ‘WEEK 4: You’ve Been Found’ from the series ‘Honest to God’",
        },
        {
            id: 4,
            author: "Curtis Miles",
            timestamp: "March 10, 2019 @ 9:15pm",
            content: "commented on the teaching ‘WEEK 4: You’ve Been Found’ from the series ‘Honest to God’",
        },
    ];

    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'explore',
            conversationOpen: false,
            communityStarted: false,
            selectedCommunity: "",
        }
        this.tabChanged = this.tabChanged.bind(this);
        this.subNavChanged = this.subNavChanged.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleToggleConversation = this.handleToggleConversation.bind(this);
        this.handleStartCommunity = this.handleStartCommunity.bind(this);
        this.handleSelectedCommunityChange = this.handleSelectedCommunityChange.bind(this);
    }

    tabChanged(event, tabValue){
        console.log("Home.tabChanged(): event = %o, tabValue = %o", event, tabValue);
        this.setState({selectedTab: tabValue});
        this.props.history.push("/home/" + tabValue);
    }

    subNavChanged(event){
        console.log("Home.subNavChanged(): event = %o event.currentTarget.id = %o", event, event.currentTarget.id);
        let selectedSubNav = event.currentTarget.id;
        this.setState({selectedSubNav: selectedSubNav});
        this.props.history.push("/home/" + this.state.selectedTab + "/" + selectedSubNav);
    }

    handleDrawerOpen(){
        this.setState({conversationOpen: true});
    }
    handleDrawerClose(){
        this.setState({conversationOpen: false});
    }

    handleToggleConversation(){
        if (this.state.conversationOpen){
            this.handleDrawerClose();
        } else {
            this.handleDrawerOpen();
        }
    }

    handleSelectedCommunityChange(event){
        console.log("home.handleSelectedCommunityChange(): event.target.value = %o", event.target.value);
        this.setState({selectedCommunity: event.target.value});
    }

    handleStartCommunity(){
        this.setState({communityStarted: true})
    }

    render(){
        const selectedTab = this.state.selectedTab;

        let communityConnectorContent;

        if (this.state.communityStarted){
            communityConnectorContent = (
                <div className="community-container">
                    <div className="community-select-container">
                        <Select color="primary" className="community-select"
                            value={this.state.selectedCommunity} onChange={this.handleSelectedCommunityChange} displayEmpty name="selectedCommunity">
                            <MenuItem value="">No community selected</MenuItem>
                            <MenuItem value={'site'}>The Meeting House: Ottawa</MenuItem>
                            <MenuItem value={'homechurch'}>Snider Terrace Home Church</MenuItem>
                            <MenuItem value={'huddle'}>My Huddle</MenuItem>
                        </Select>
                    </div>
                    <div className="community-conversation-container">
                        { this.conversations.map(conversation => (
                            <Card className="card" key={conversation.id}>
                                <CardHeader avatar={<Avatar>R</Avatar>}
                                            action={<IconButton><MoreVertIcon /></IconButton>}
                                            title={conversation.author}
                                            subheader={conversation.timestamp}
                                />
                                <CardContent>{conversation.content}</CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            )            
        } else {
            communityConnectorContent = (
                <div className="community-connector-intro-container">
                        <img src={CommunityConnectorImage}></img>
                        <div className="intro-title">Welcome to the <br/>Community Connector</div>
                        <p>Spiritual growth is a team sport, and the community corner is where you can find and connect with your team. </p>
                        <p>Whether you’re looking for a large online community, a small in-person group, or anything in between, we’ll help get you get connected to real people you can grow alongside.</p>
                        <div className="button-container">
                        <Button onClick={this.handleStartCommunity} variant="contained" color="secondary">Get started</Button>
                        </div>
                </div>                
            )            
        }

        return (
            <div className="page-home">
                <MuiThemeProvider theme={darkTheme}>
                <PageHeader contextQuestion={this.props.contextQuestion} handleQuestionChanged={this.props.handleQuestionChanged} ></PageHeader>
                <NavBar tabChanged={this.tabChanged} selectedTab={selectedTab} handleToggleConversation={this.handleToggleConversation}></NavBar>
                <div className="content-container">
                    <div className="main-container">
                        <Route path={`${this.props.match.path}/explore`} render={(props) => <HomeExplore {...props} contextQuestion={this.props.contextQuestion} handleQuestionChanged={this.props.handleQuestionChanged} navChanged={this.tabChanged} subNavChanged={this.subNavChanged} />}></Route>
                        <Route path={`${this.props.match.path}/difference`} render={(props) => <HomeDifference {...props} navChanged={this.tabChanged} subNavChanged={this.subNavChanged} />}></Route>
                        <Route path={`${this.props.match.path}/bible`} component={HomeBible}></Route>
                        <Route path={`${this.props.match.path}/kids`} render={(props) => <HomeKids {...props} navChanged={this.tabChanged} subNavChanged={this.subNavChanged} />}></Route>
                        <Route path={`${this.props.match.path}/teaching`} render={(props) => <HomeTeaching {...props} navChanged={this.tabChanged} subNavChanged={this.subNavChanged} />}></Route>
                        <Route path={`${this.props.match.path}/community`} render={(props) => <HomeCommunity {...props} navChanged={this.tabChanged} subNavChanged={this.subNavChanged} />}></Route>
                    </div>
                    <Drawer variant="permanent" className={'conversation-drawer ' + (this.state.conversationOpen ? 'open' : 'closed')} 
                            open={this.state.conversationOpen} anchor="right"
                            classes={{
                                paper: 'paper ' + (this.state.conversationOpen ? 'open' : 'closed'),
                            }}>
                        <div className='drawer-header'>
                            <IconButton onClick={this.state.conversationOpen ? this.handleDrawerClose : this.handleDrawerOpen}>
                                <ChevronRightIcon/>
                            </IconButton>
                            <div className="header-title">Community Connector</div>
                        </div>
                        <Divider />
                        { communityConnectorContent }
                    </Drawer>
                </div>
                </MuiThemeProvider>
            </div>
        )
    }

}
