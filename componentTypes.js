import React from 'react';
const { string } = React.PropTypes;

// ES6 class way:
class Button extends React.Component {
  static propTypes = {
    text: string.isRequired
  }

  render() {
    return (
      <div>
        <button>{this.props.text}</button>
      </div>
    )
  }
}

// ES5 class way:
const Button = React.createClass({
  propTypes: {
    text: string.isRequired
  }
  render: function() {
    return (
      <div>
        <button>{this.props.text}</button>
      </div>
    )
  }
})

// Stateless functional component
const Button = ({text}) => {
  return (
    <div>
      <button>{this.props.text}</button>
    </div>
  )
}

Button.propTypes = {
  text: string.isRequired
}

// Presentational component
// Shorthand for above
const Button = ({text}) => (
  <div>
    <button>{this.props.text}</button>
  </div>
)

Button.propTypes = {
  text: string.isRequired
}
