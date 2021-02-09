import React  from 'react';



const validation = (props) => {
    return(
        <div>
                {
                    props.strlen < 5 ? <p>Text too short</p> :
                    <p>Text Long Enough</p>
                }
        </div>
        
    );
};

export default validation;