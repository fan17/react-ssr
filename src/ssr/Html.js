import React from 'react';

class Html extends React.Component {
    render() {
        const { children, initialState, scripts } = this.props;

        return (
            <html>
                <head>
                    <meta charSet="UTF-8" />
                    <title>Server Side Rendered React App!!</title>
                </head>
                <body>
                    <div
                        id="root"
                        dangerouslySetInnerHTML={{ __html: children }}
                    />
                    {initialState && (
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `window.APP_STATE=${JSON.stringify(initialState)}`,
                            }}
                        />
                    )}
                    {scripts.map((item, index) => <script key={index} src={item} />)}
                </body>
            </html>
        );
    }
}

export default Html;
