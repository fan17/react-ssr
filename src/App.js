import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.box = React.createRef();
    }

    componentDidMount() {
        this.changeBoxColor();
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
    }

    render() {
        return (
            <div>
                <header>
                    <h1>React SSR</h1>
                </header>
                <div
                    className="box"
                    ref={this.box}
                    style={{}}
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

export default App;
