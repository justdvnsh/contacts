import React, {Component} from 'react';

class Contacts extends Component {
  render() {
    const people = this.props.contacts;

    return <ol>
      {
        people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))
      }
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts contacts={[
          {name: 'Tyler'},
          {name: 'karen'},
          {name: 'Richard'}
        ]} />
      </div>
    );
  }
}

export default App;
