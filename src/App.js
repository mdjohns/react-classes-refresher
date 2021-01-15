import './App.css';
import { Counter, CounterFunc } from './components/Counter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Container } from './components/Container';
import { Fetching, FetchingFunc } from './components/Fetching';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Counters',
    path: '/counters',
  },
  {
    name: 'Fetching',
    path: '/fetching',
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Menu choices={links} />
        <Switch>
          <Route path="/counters">
            <Container title="Counters">
              <Counter />
              <CounterFunc />
            </Container>
          </Route>

          <Route path="/fetching">
            <Container title="Fetching">
              <FetchingFunc />
              <Fetching />
            </Container>
          </Route>
          <Route exact path="/">
            <>
              <h1>Make a Selection</h1>

              <p>
                I&#39;ve been working with functional components for too long,
                so I wanted to poke around with classes again to brush up.
              </p>
            </>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
