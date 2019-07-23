import React from 'react';

class Validation extends React.Component {
    render() {
        console.log('====================================');
        console.log(this.props.length);
        console.log('====================================');
        return <p>Validators {this.props.length}</p>;
    }
}

export default Validation;