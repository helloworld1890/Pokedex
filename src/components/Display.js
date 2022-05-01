import React, { useContext } from 'react';
import { DataContext } from '../context/index';
import DisplayItem from './DisplayItem';

const Display = () => {
    const data = useContext(DataContext);
    const display = data.map((item, index) => {
    return (
        <DisplayItem item={item} key={index} /> 
    )
    })

    return(
        <div>
            {display}
        </div>
    )
}

