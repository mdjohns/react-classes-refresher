import React, { useEffect, useState } from 'react';

const displayURL = 'https://github.com/facebook/react';
const fetchURL = 'https://api.github.com/repos/facebook/react';
const emojis = {
  eyes: '👀',
  star: '✨',
  fork: '🍴',
};

async function fetchData(url) {
  const data = await fetch(url);
  const json = await data.json();

  return json;
}

function FetchingFunc() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData(fetchURL).then((d) => setData(d));
  }, []);

  return !data ? (
    'Loading'
  ) : (
    <>
      <h2>Fetching (Functional Component)</h2>

      <strong>
        <a href={displayURL}>{displayURL}</a>
      </strong>
      <br />
      <strong>
        {emojis.eyes} {data.subscribers_count}
      </strong>
      <strong>
        {emojis.star} {data.stargazers_count}
      </strong>
      <strong>
        {emojis.fork} {data.forks_count}
      </strong>
    </>
  );
}

class Fetching extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetchData(fetchURL).then((d) => this.setState({ data: d }));
  }

  render() {
    return !this.state.data ? (
      'Loading'
    ) : (
      <>
        <h2>Fetching (Functional Component)</h2>

        <strong>
          <a href={displayURL}>{displayURL}</a>
        </strong>
        <br />
        <strong>
          {emojis.eyes} {this.state.data.subscribers_count}
        </strong>
        <strong>
          {emojis.star} {this.state.data.stargazers_count}
        </strong>
        <strong>
          {emojis.fork} {this.state.data.forks_count}
        </strong>
      </>
    );
  }
}

export { FetchingFunc, Fetching };
