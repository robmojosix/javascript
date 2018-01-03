// React component decorator pattern
// For adding methods to an existing Component
// In the style of the decorator pattern

import React, { Component } from 'react';

// Create the decorator class
// with our prop isServerRendered
const DecoratedComponent => class extends Component {
 static displayName = 'ServerRendered'
 static defaultProps = {}
 static propTypes = {}

 constructor(props) {
   super(props);

   this.state = {
     isServerRendered: true
   };
 }

 componentDidMount() {
   if (logicToDetermineClientSideRendered) {
     this.setState({ isServerRendered: false });
   }
 }

 render() {
   return (
     <DecoratedComponent {...this.props} isServerRendered={this.state.isServerRendered} />
   );
 }
};

// Using it on a component:
import { ServerRendered } from 'src/client/decorators'; // the above code/component

// isServerRendered is the new decorated prop
const component = ({ isServerRendered, otherProps }) => {

  return (
    <div className="gift-carousel">
      { isServerRendered }
    </div>
  );
};

// magix happens here we export the component but wrap it in
// our decorated component
export default ServerRendered(component);
