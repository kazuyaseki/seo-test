import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    result: 'not fetched'
  };

  componentDidMount() {
    fetch(
      'https://fervent-torvalds-4cb1f2.netlify.com/.netlify/functions/hello'
    )
      .then(result => result.text())
      .then(result => this.setState(() => ({ result })));
  }

  render() {
    return <div>{this.state.result}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
