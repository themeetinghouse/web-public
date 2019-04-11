import React from 'react';
import { Route } from 'react-router-dom';
import './homeKids.scss';
import SubNavBar from '../../components/SubNavBar/SubNavBar';
import { PageContentSkeleton } from '../../components/PageContentSkeleton/PageContentSkeleton';

export class HomeKids extends React.Component {

    constructor(props){
        super(props);
    }
    
    render(){
        let subNavOptions = [
            {id: 'overview', label: 'Overview', isDefault:true, component: PageContentSkeleton, layout: 0},
            {id: 'preschool', label: 'Preschool', component: PageContentSkeleton, layout: 1},
            {id: 'kidmax', label: 'Kids', component: PageContentSkeleton, layout: 1},
            {id: 'juniorhigh', label: 'Junior High', component: PageContentSkeleton, layout: 1},
            {id: 'youth', label: 'Youth', component: PageContentSkeleton, layout: 1},
            {id: 'blogs', label: 'Blogs', component: PageContentSkeleton, layout: 2},
        ]
        return (
            <div className="page-kids">
                <SubNavBar currentPath={this.props.location} subNavOptions={subNavOptions} subNavChanged={this.props.subNavChanged}></SubNavBar>
                { subNavOptions.map(navOption => {
                    let result = [];
                    const Cmp = navOption.component;
                    if (navOption.isDefault){
                        result.push(<Route exact path={`${this.props.match.path}/`} render={(props) => <Cmp {...props} title={navOption.label} layout={navOption.layout}/>}></Route>);
                    }
                result.push(<Route path={`${this.props.match.path}/${navOption.id}`} render={(props) => <Cmp {...props} title={navOption.label}  layout={navOption.layout}/>}></Route>);
                    return result;
                })}  
            </div>
        )
    }
}