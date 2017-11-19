import React from 'npm:react';
import ReactRouter from 'npm:react-router-dom';

const {
  Component
} = React;


const {
  HashRouter,
  Route,
  Switch,
  Link
} = ReactRouter;

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <HashRouter>
        <div>
          <div className="routes">
            <Link to="/">Home React</Link>
            <Link to="/about">About React</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}
