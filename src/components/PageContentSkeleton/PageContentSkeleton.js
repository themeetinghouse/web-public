import React from 'react';
import { withRouter } from 'react-router'
import './pageContentSkeleton.scss';
import { Grid } from '@material-ui/core';

export class PageContentSkeleton extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        let layout = this.props.layout;// || Math.floor(Math.random() * 3);
        let options = [];
    
        options.push(
            <Grid container alignItems="stretch" justify="center" spacing={24}>
                <Grid item xs={12} md={8}>
                    <div className="leaf-item"></div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} md={12}><div className="leaf-item inner"></div></Grid>
                        <Grid item xs={12} md={12}><div className="leaf-item inner"></div></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}><div className="leaf-item inner"></div></Grid>
                <Grid item xs={12} md={4}><div className="leaf-item inner"></div></Grid>
                <Grid item xs={12} md={4}><div className="leaf-item inner"></div></Grid>
            </Grid>        
        )    
    
        options.push(
            <Grid container alignItems="stretch" justify="center" spacing={24}>
                <Grid item xs={12} md={8}>
                    <Grid container spacing={24} alignItems="stretch">
                        <Grid item xs={12} md={6}><div className="leaf-item inner"></div></Grid>
                        <Grid item xs={12} md={6}><div className="leaf-item inner"></div></Grid>
                        <Grid item xs={12} md={6}><div className="leaf-item inner"></div></Grid>
                        <Grid item xs={12} md={6}><div className="leaf-item inner"></div></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}><div className="leaf-item"></div></Grid>
                <Grid item xs={12} md={12}><div className="leaf-item inner"></div></Grid>
            </Grid>        
        )    
    
        options.push(
            <Grid container alignItems="stretch" justify="center" spacing={24}>
                <Grid item xs={12} md={4}>
                    <div className="leaf-item inner-long"></div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="leaf-item inner-long"></div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <div className="leaf-item inner-long"></div>
                </Grid>
                <Grid item xs={12} md={12}><div className="leaf-item inner"></div></Grid>
                <Grid item xs={12} md={12}><div className="leaf-item inner"></div></Grid>
            </Grid>        
        )        

        options.push(
            <Grid container alignItems="stretch" justify="center" spacing={16}>
                <Grid item xs={8}>
                    <Grid container spacing={16} alignItems="stretch">
                        <Grid item xs={2}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={10}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={2}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={10}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={2}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={10}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={2}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={10}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={2}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={10}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={2}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={10}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={2}><div className="leaf-item inner-small"></div></Grid>
                        <Grid item xs={10}><div className="leaf-item inner-small"></div></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4}><div className="leaf-item"></div></Grid>
            </Grid>        
        )        
    
        return (
            <div className="page-content-skeleton">
                <div className="skeleton-header">{this.props.title}</div>
                {options[layout]}
                
            </div>
        )
    }
}

export default withRouter(PageContentSkeleton);