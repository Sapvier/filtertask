import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const Items = ({data}) => {
    return (
        <div className="item">
            {data.map(item =>
                <div key={uuidv4()}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
            )}
        </div>
    );
};


export default Items;
