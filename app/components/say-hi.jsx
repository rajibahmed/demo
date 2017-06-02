import React from 'npm:react';
import * as Button from 'npm:klarna/ui/Button'

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

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.name}
        <Button.Primary size='small'>
          Click me!
        </Button.Primary>
    </div>
    )
  }
}

