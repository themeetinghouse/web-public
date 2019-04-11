import React, { Children } from 'react';
import { Card, CardActionArea, CardContent, CardActions, CardMedia, IconButton, Badge, Divider } from '@material-ui/core';
import ModeComment from '@material-ui/icons/ModeComment';
import Favorite from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share';

import './baseCard.scss';

export function BaseCard({contentItem, children, handleClick}){
    return (
        <Card className="card card-base" onClick={handleClick} id={contentItem.id} >
            <CardActionArea>
                <div className="card-tag">{contentItem.type.toLowerCase()}</div>
                <CardMedia component="img" image={contentItem.image} title={contentItem.title} />
                <CardContent className="card-content">
                    <div className="card-content-inner">
                        <div className="card-title">{contentItem.title}</div>
                        <div className="card-subtitle">{contentItem.speaker ? contentItem.speaker + ',': ''} {contentItem.timestamp}</div>
                        <div className="card-description">{contentItem.description}</div>
                    </div>
                    {children}
                </CardContent>
            </CardActionArea>
            <CardActions className="card-actions">
                <IconButton className="share-button">
                    <Share/>
                </IconButton>
                <IconButton className="favorite-button">
                    <Badge className="icon-badge" badgeContent={Math.floor(Math.random() * 123)} color="secondary" classes={{colorSecondary: '#ff0000'}}>
                        <Favorite/>
                    </Badge>
                </IconButton>
                <IconButton className="comment-button">
                    <Badge className="icon-badge" badgeContent={Math.floor(Math.random() * 10)} color="secondary">
                        <ModeComment/>
                    </Badge>
                </IconButton>
            </CardActions>
        </Card>        
    )    
}