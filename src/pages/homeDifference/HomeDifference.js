import React from 'react';
import { Route } from 'react-router-dom';
import './homeDifference.scss';
import { HomeDifferenceOverview } from '../homeDifferenceOverview/HomeDifferenceOverview';
import SubNavBar from '../../components/SubNavBar/SubNavBar';
import { HomeDifferenceOpportunities } from '../homeDifferenceOpportunities/HomeDifferenceOpportunities';
import { PageContentSkeleton } from '../../components/PageContentSkeleton/PageContentSkeleton';

export class HomeDifference extends React.Component {

    constructor(props){
        super(props);
    }
    
    render(){
        let subNavOptions = [
            {id: 'overview', label: 'Overview', isDefault:true, component: HomeDifferenceOverview},
            {id: 'opportunities', label: 'Opportunities', component: PageContentSkeleton, layout:1},
            {id: 'giving', label: 'Giving', component: PageContentSkeleton, layout:0},
            {id: 'ideas', label: 'Ideas', component: PageContentSkeleton, layout:2},
        ]

        return (
            <div className="page-teaching">
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