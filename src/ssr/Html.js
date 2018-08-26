import React from 'react';
import PropTypes from 'prop-types';

class Html extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    scripts: PropTypes.array
  }

  render () {
    const { children, scripts } = this.props;

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>Server Side Rendered React App!!</title>
        </head>
        <body>
          <div id="root"
               dangerouslySetInnerHTML={{ __html: children }}
          ></div>
          {scripts.map((item, index) => {
            return <script key={index} src={item}></script>;
          })}
        </body>
      </html>
    );
  }
}

export default Html;