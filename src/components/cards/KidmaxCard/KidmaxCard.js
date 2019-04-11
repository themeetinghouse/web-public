import React from 'react';
import { BaseCard } from '../BaseCard/BaseCard';
import './kidmaxCard.scss';

export function KidmaxCard({contentItem, handleClick}){
    return (
        <BaseCard contentItem={contentItem} handleClick={handleClick}>
        </BaseCard>
    )    
}