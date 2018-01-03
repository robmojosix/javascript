//React lifecycle

import React, { Component } from 'react';

class foo extends Component {
  shouldComponentUpdate() {}
  componentWillReceiveProp() {}
  componentWillMount() {}
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {}
}

// other notes
getDefaultProps()
getInitialState()
ES5 // React.creatClass
ES6 // class myclass extends React.creatClass
defaultProps()
Static method defined on but after class
This.state is put in constructor

ComponentWillMount()
Render()
ComponentDidMount()
