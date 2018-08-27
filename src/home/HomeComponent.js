import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HomeComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                HomeComponent
            </div>
        );
    }
}

HomeComponent.propTypes = {
    title: PropTypes.string.isRequired
};

export default HomeComponent;
