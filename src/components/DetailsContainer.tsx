import React, { SyntheticEvent, ReactNode } from 'react';
import Button from './Button'

interface DetailProps {
    children: ReactNode
}
const DetailsContainer = (props: DetailProps) => {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default DetailsContainer