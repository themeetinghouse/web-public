import React from 'react';
import { Route } from 'react-router-dom';
import './homeTeaching.scss';
import { HomeTeachingOverview } from './overview/HomeTeachingOverview';
import HomeTeachingSeries from './series/HomeTeachingSeries';
import SubNavBar from '../../components/SubNavBar/SubNavBar';
import { PageContentSkeleton } from '../../components/PageContentSkeleton/PageContentSkeleton';
import { withTheme } from '@material-ui/core';

export class HomeTeaching extends React.Component {

    constructor(props){
        super(props);
    }
    
    render(){
        let subNavOptions = [
            {id: 'overview', label: 'Overview', isDefault:true, component: PageContentSkeleton, layout: 0},
            {id: 'sermons', label: 'Teaching', component: HomeTeachingSeries, layout: 0},
            {id: 'podcasts', label: 'Podcasts', component: PageContentSkeleton, layout: 1},
            {id: 'blogs', label: 'Blogs', component: PageContentSkeleton, layout: 2},
        ]
        return (
            <div className="page-teaching">
                <SubNavBar currentPath={this.props.location} subNavOptions={subNavOptions} subNavChanged={this.props.subNavChanged}></SubNavBar>
                { subNavOptions.map(navOption => {
                    let result = [];
                    const Cmp = navOption.component;
                    if (navOption.isDefault){
                        result.push(<Route key={navOption.id} exact path={`${this.props.match.path}/`} render={(props) => <Cmp {...props} title={navOption.label} layout={navOption.layout}/>}></Route>);
                    }
                    result.push(<Route key={navOption.id + 'a'} path={`${this.props.match.path}/${navOption.id}`} render={(props) => <Cmp {...props} title={navOption.label}  layout={navOption.layout}/>}></Route>);
                    return result;
                })}  
            </div>
        )
    }
}

export default withTheme(HomeTeaching);
