import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello Netlify';

class App extends React.Component {
  componentDidMount() {
    fetch(
      'https://fervent-torvalds-4cb1f2.netlify.com/.netlify/functions/hello'
    )
      .then(res => {
        console.log(res, res.body);
        return res.text();
      })
      .then(res => console.log(res));
  }

  render() {
    return <div>{title}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
