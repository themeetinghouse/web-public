import React from 'react';
import { Route } from 'react-router-dom';
import './homeCommunity.scss';
import SubNavBar from '../../components/SubNavBar/SubNavBar';
import { PageContentSkeleton } from '../../components/PageContentSkeleton/PageContentSkeleton';

export class HomeCommunity extends React.Component {

    constructor(props){
        super(props);
    }
    
    render(){
        let subNavOptions = [
            {id: 'overview', isDefault:true, label: 'About Community', layout: 0, component: PageContentSkeleton},
            {id: 'events', label: 'Events', layout: 1, component: PageContentSkeleton},
            {id: 'blogs', label: 'Blogs', layout: 2, component: PageContentSkeleton},
            {id: 'homechurch', label: 'Home Church', layout: 1, component: PageContentSkeleton},
            {id: 'stories', label: 'Stories', layout: 2, component: PageContentSkeleton},
        ]
        return (
            <div className="page-community">
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