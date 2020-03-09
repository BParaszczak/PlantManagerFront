import React from 'react';
import PropTypes from 'prop-types';
import './Plant.css';

class Plant extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>{this.props.name} </p>
            </div>

        )
    }
}

Plant.propTypes = {
    name: PropTypes.string.isRequired,
}


export default Plant;