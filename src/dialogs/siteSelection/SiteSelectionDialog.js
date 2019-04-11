import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Button, DialogActions, MuiThemeProvider, IconButton, InputBase, FormControl, MenuItem, Select, OutlinedInput, Input, Tabs, Tab} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import LocationSearching from '@material-ui/icons/LocationSearching';
import LocationOn from '@material-ui/icons/LocationOn';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import './siteSelectionDialog.scss';
import { darkTheme } from '../../themes';
import GoogleMapReact from 'google-map-react';
import AboutLocationImg from '../../assets/images/about-location.png';
import PageContentSkeleton from '../../components/PageContentSkeleton/PageContentSkeleton'

export class SiteSelectionDialog extends React.Component {

    sites = [{"_id":"5445a40c930e50914554daa7","id":"BRAMPTON","name":"Brampton","categories":["ALL","REGIONAL"],"location":{"longitude":-79.768112,"latitude":43.733024},"state":"1"},{"_id":"5445a40c930e50914554daa6","id":"BRANTFORD","name":"Brantford","categories":["ALL","REGIONAL"],"location":{"longitude":-80.278012,"latitude":43.182376},"state":"1"},{"_id":"5445a40c930e50914554daa8","id":"BURLINGTON","name":"Burlington","categories":["ALL","REGIONAL"],"location":{"longitude":-79.829876,"latitude":43.343507},"state":"1"},{"_id":"56134473e4b04bc9506892e8","id":"DOWNTOWN_HAMILTON","name":"Downtown Hamilton","categories":["ALL","REGIONAL"],"location":{"longitude":-79.8702504,"latitude":43.26213},"state":"1"},{"_id":"5445a40c930e50914554daa9","id":"DOWNTOWN_TORONTO","name":"Downtown Toronto","categories":["ALL","REGIONAL"],"location":{"longitude":-79.391418,"latitude":43.648869},"state":"1"},{"_id":"5445a40c930e50914554daaa","id":"EAST_HAMILTON","name":"East Hamilton","categories":["ALL","REGIONAL"],"location":{"longitude":-79.808856,"latitude":43.193331},"state":"1"},{"_id":"5747ce11dcba0f2d9d0db9a5","id":"EAST_TORONTO","name":"East Toronto","categories":["ALL","REGIONAL"],"location":{"longitude":-79.4744334,"latitude":43.6578297},"state":"1"},{"_id":"5445a40c930e50914554daab","id":"HIGH_PARK","name":"High Park","categories":["ALL","REGIONAL"],"location":{"longitude":-79.4744334,"latitude":43.6578297},"state":"1"},{"_id":"5445a40c930e50914554daac","id":"KITCHENER","name":"Kitchener","categories":["ALL","REGIONAL"],"location":{"longitude":-80.387502,"latitude":43.4054},"state":"1"},{"_id":"5445a40c930e50914554dab5","id":"LONDON","name":"London","categories":["ALL","REGIONAL"],"location":{"longitude":-81.278295,"latitude":43.027068},"state":"1"},{"_id":"5445a40c930e50914554daad","id":"NEWMARKET","name":"Newmarket","categories":["ALL","REGIONAL"],"location":{"longitude":-79.555998,"latitude":43.79428},"state":"1"},{"_id":"5445a40c930e50914554daae","id":"OAKVILLE","name":"Oakville","categories":["ALL","OAKVILLE"],"location":{"longitude":-79.685926,"latitude":43.511459},"state":"1","regions":[{"id":"OAKVILLE-OAKVILLE","name":"Oakville","location":{"longitude":0,"latitude":0}},{"id":"OAKVILLE-MISSISSAUGA","name":"Mississauga","location":{"longitude":0,"latitude":0}},{"id":"OAKVILLE-MILTON","name":"Milton","location":{"longitude":0,"latitude":0}}]},{"_id":"5445a40c930e50914554daaf","id":"OTTAWA","name":"Ottawa","categories":["ALL","REGIONAL"],"location":{"longitude":-75.613528,"latitude":45.431384},"state":"1"},{"_id":"5445a40c930e50914554dab6","id":"OWEN_SOUND","name":"Owen Sound","categories":["ALL","TEACHING"],"location":{"longitude":-80.933555,"latitude":44.573804},"state":"1"},{"_id":"5445a40c930e50914554dab0","id":"PARRY_SOUND","name":"Parry Sound","categories":["ALL","REGIONAL"],"location":{"longitude":-80.036396,"latitude":45.35407},"state":"1"},{"_id":"5445a40c930e50914554dab1","id":"RICHMOND_HILL","name":"Richmond Hill","categories":["ALL","REGIONAL"],"location":{"longitude":-79.58688,"latitude":43.70752},"state":"1"},{"_id":"5445a40c930e50914554dab2","id":"UPTOWN_TORONTO","name":"Uptown Toronto","categories":["ALL","REGIONAL"],"location":{"longitude":-79.58688,"latitude":43.70752},"state":"1"},{"_id":"5445a40c930e50914554dab3","id":"WATERLOO","name":"Waterloo","categories":["ALL","REGIONAL"],"location":{"longitude":-80.527216,"latitude":43.498807},"state":"1"},{"_id":"5445a40c930e50914554dab4","id":"WEST_HAMILTON","name":"West Hamilton","categories":["ALL","REGIONAL"],"location":{"longitude":-79.9539437,"latitude":43.2272571},"state":"1"},{"_id":"5445a40c930e50914554dab8","id":"OTHER","name":"Other","categories":["ALL","REGIONAL"],"location":{"longitude":0,"latitude":0},"state":"1"},{"_id":"5445a40c930e50914554dab9","id":"DISTANCE_GROUPS","name":"Distance groups","categories":["ALL","REGIONAL"],"location":{"longitude":0,"latitude":0},"state":"1"}]


    constructor(props){
        super(props);
        this.state = {
            location: "",
            selectedTab: 'about'
        }
        this.handleLocationSelectChange = this.handleLocationSelectChange.bind(this);
        this.handleLocationMapClick = this.handleLocationMapClick.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleLocationSelectChange(event){
        this.setState({location: event.target.value});
    }

    handleLocationMapClick(event){
        let loc = this.sites.find(site => site.id === event.currentTarget.id);
        console.log("SiteSelectionDialog.handleLocationMapClick(): loc = %o, event.target.id = %o", loc, event.currentTarget.id);
        this.setState({selectedLocation: loc});
    }

    handleTabChange(event, value){
        this.setState({selectedTab: value});
    }

    render(){

        const siteSelectionContent = (
            <div>
                <DialogContentText>
                    <p>The Meeting House is a family of churches with locations throughout the Greater Toronto Area, and extending as far as Ottawa and London, Ontario.  Each site has its own local feel and flavour.</p>
                    <p>For those a little further afield, check out our distance sites — group of people that meet physically or virtually to track with The Meeting House teaching together.</p>
                </DialogContentText>
                <h4>Find a location near you</h4>
                <div class="form-bar">
                    <Input placeholder="Enter your postal code"></Input>
                    <div class="separator">OR</div>
                    <Button><LocationSearching></LocationSearching>&nbsp;&nbsp;Use your location</Button>
                    <div class="separator">OR</div>
                    <FormControl variant="outlined">
                        <Select value={this.state.location} displayEmpty onChange={this.handleLocationSelectChange}>
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value={'Ottawa'}>Ottawa</MenuItem>
                            <MenuItem value={'Uptown Toronto'}>Uptown Toronto</MenuItem>
                            <MenuItem value={'Downtown Toronto'}>Downtown Toronto</MenuItem>
                        </Select>
                    </FormControl>
                    
                </div>
                <div style={{ height: '40vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyBiKSLk1whvNQI8LNyHi-Qaoa0MXZsx_Eg' }}
                        defaultCenter={{lat: 43.5112168, lng: -79.6875329}}
                        defaultZoom={11}
                    >
                        { this.sites.map(site => 
                            <IconButton onClick={this.handleLocationMapClick} key={site.id} id={site.id} color="secondary" lat={site.location.latitude} lng={site.location.longitude}><LocationOn></LocationOn></IconButton>
                        )}
                    </GoogleMapReact>
                </div>               
            </div>
        )

        const aboutContent = (
            <div className="about-content">
                <div className="location-description"><p>At The Meeting House Ottawa, we are a fun-loving bunch of folks interested in learning more about Jesus, serving our community, and having a good time.  If you’re in the Ottawa Area, stop by and get to to know us.  We’d love to meet you!  At The Meeting House Ottawa, we are a fun-loving bunch of folks interested in learning more about Jesus, serving our community.</p></div>
                <div className="location-video"><img src={AboutLocationImg}></img></div>
            </div>
        )

        const teamContent = <div class="tab-content-container"><PageContentSkeleton layout={3}></PageContentSkeleton></div>

        const siteDetailsContent = (
            <div>
                <div>
                    <Button className="choose-location-back-button" size="small" onClick={this.handleLocationMapClick}><ArrowBackIos></ArrowBackIos>&nbsp;&nbsp;Choose your location</Button>
                </div>
                <Tabs value={this.state.selectedTab} indicatorColor="secondary"  classes={{indicator: 'indicator'}} onChange={this.handleTabChange}>
                    <Tab value="about" label="About Us"></Tab>
                    <Tab value="team" label="Our Team"></Tab>
                    <Tab value="partners" label="Our Partners"></Tab>
                    <Tab value="homechurch" label="Home Churches"></Tab>
                    <Tab value="details" label="The Details"></Tab>
                </Tabs>
                <div>
                    {this.state.selectedTab === 'about' && aboutContent}
                    {this.state.selectedTab === 'team' && teamContent}
                    {this.state.selectedTab === 'partners' && <div className="content-blank"></div>}
                    {this.state.selectedTab === 'homechurch' && <div className="content-blank"></div>}
                    {this.state.selectedTab === 'details' && <div className="content-blank"></div>}
                </div>
            </div>
        )

        return (
            <div>
                <MuiThemeProvider theme={darkTheme}>
                <Dialog
                    className="dialog-site-selection"
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                    maxWidth="md"
                    >
                    <DialogTitle id="form-dialog-title"> {this.state.selectedLocation ? 'The Meeting House: ' + this.state.selectedLocation.name : 'Choose your Location'}
                        <IconButton aria-label="Close" className='close-dialog-button' onClick={this.props.handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent>
                         { this.state.selectedLocation ? siteDetailsContent : siteSelectionContent }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={this.props.handleClose} color="secondary">
                            Choose location
                        </Button>
                    </DialogActions>
                </Dialog>
                </MuiThemeProvider>
            </div>
        )
    }
}