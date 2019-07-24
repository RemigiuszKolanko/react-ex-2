import React from 'react';

const Validation = (props) => {
    let validationMessage = 'Text long enough.';

    if(props.length < 6) {
        validationMessage = 'Text too short.'
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default Validation;