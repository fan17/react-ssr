import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BoxComponent extends Component {
    constructor(props) {
        super(props);

        this.box = React.createRef();
    }

    componentDidMount() {
        // this.changeBoxColor();
    }

    changeBoxColor() {
        const colors = [
            'red',
            'green',
            'blue',
            'yellow',
            'black',
        ];

        const boxColor = colors[Math.floor(Math.random() * colors.length)];

        this.box.current.style.background = boxColor;
        this.props.changeTitle(boxColor);
    }

    render() {
        return (
            <div>
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                <div
                    ref={this.box}
                    style={{ width: 400, height: 400, display: 'block' }}
                />
                <button
                    onClick={() => this.changeBoxColor()}
                    type="button"
                >
                    Change color of the box
                </button>
            </div>
        );
    }
}

BoxComponent.propTypes = {
    title: PropTypes.string.isRequired,
    changeTitle: PropTypes.func.isRequired,
};

export default BoxComponent;
