import React from 'react';
import { Card, CardActionArea, CardContent, CardActions, CardMedia, IconButton, Badge, Divider } from '@material-ui/core';
import ModeComment from '@material-ui/icons/ModeComment';
import Favorite from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share';

import './sermonCard.scss';
import { BaseCard } from '../BaseCard/BaseCard';
import { withContext } from '../../AppContextProvider';
import { teachingService } from '../../../services/Teaching';

class SermonCard extends React.Component{

    constructor(props){
        super(props);
        this.getClickHandler = this.getClickHandler.bind(this);
    }

    getClickHandler(){
        return (event) => {
            let teaching = teachingService.getTeaching(this.props.contentItem.id);
            this.props.context.updateContext('selectedItem', teaching);
            this.props.handleClick(event);
        }
    }

    render(){
        return (
            <BaseCard contentItem={this.props.contentItem} handleClick={this.getClickHandler()}>
                <div className="card-sermon-content">
                    <Divider></Divider>
                    <div className="series-container">
                        <div className="series-thumbnail"><img src={this.props.contentItem.seriesImage}/></div>
                        <div className="series-title">FROM THE SERIES: {this.props.contentItem.seriesTitle}</div>
                    </div>
                    <Divider></Divider>
                </div>
            </BaseCard>
        )    
    }
}

export default withContext(SermonCard);