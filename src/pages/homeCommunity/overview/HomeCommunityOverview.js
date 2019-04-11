import React from 'react';
import { PageContentSkeleton } from '../../../components/PageContentSkeleton/PageContentSkeleton';
import './homeCommunityOverview.scss';

export class HomeCommunityOverview extends React.Component {

    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="page-home-community-overview"><PageContentSkeleton></PageContentSkeleton></div>
        )
    }
}