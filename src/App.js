import React, { Component } from 'react';

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
                    ref={this.box}
                    style={{width: 400, height: 400, display: 'block'}}
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
