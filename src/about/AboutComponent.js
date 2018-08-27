import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AboutComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                AboutComponent
            </div>
        );
    }
}

AboutComponent.propTypes = {
    title: PropTypes.string.isRequired
};

export default AboutComponent;
