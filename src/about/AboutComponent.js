import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AboutComponent extends Component {

    componentDidMount() {
        this.props.fetchRepos();
    }

    render() {
        return (
            <div>
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                AboutComponent: My github repos
                <div>
                    {Object.values(this.props.repos).map(repo => (
                        <li key={repo.id}>{repo.name}</li>
                    ))}
                </div>
            </div>
        );
    }
}

AboutComponent.propTypes = {
    title: PropTypes.string.isRequired,
    fetchRepos: PropTypes.func.isRequired,
    // repos: PropTypes.object.isRequired,
};

export default AboutComponent;
