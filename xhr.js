import React from 'react'
import ReactDOM from 'react-dom'
import Axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
      .then((response) => {
        const posts = res.data.data.children.map(obj => obj.data); // create a new array of just data we need
        this.setState({ posts });
      })
  }
  render() {
    return (
        <div>
          <h1>{`/r/${this.props.subreddit}`}</h1>
          <ul>
            {this.state.posts.map(post =>
              <li key={post.id}>{post.title}</li>
            )}
          </ul>
        </div>
    );
  }
}

ReactDOM.render(
  <App subreddit="reactjs"/>,
  document.getElementById('root')
);

/////////////////////////////////////////////////////////////////

const xhr = new XMLHttpRequest();
xhr.open('GET', 'myservice/username?id=some-unique-id');
xhr.onload = function() {
    if (xhr.status === 200) {
        alert('User\'s name is ' + xhr.responseText);
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();


///////////////////////////////////////////////////////////

// chrome only
fetch('url', (res) => { res.body });
