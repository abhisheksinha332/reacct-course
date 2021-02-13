import React from 'react';

const Condition = () => {
    const value =true;

    const showIt = () => {
        return(
            value  ? <div>Its true</div> : <div>Its False</div>
        )
    }
    return(
        <div>
           {
               showIt()
           }
        </div>
    )
}

export default Condition;