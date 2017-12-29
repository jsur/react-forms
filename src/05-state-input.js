import React from 'react';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = class extends React.Component {
  static displayName = "05-state-input";

  state = {
    name: '',
    names: [],
  };

  onNameChange = (evt) => {
    // 1. always update state when value changes
    this.setState({ name: evt.target.value });
  };

  onFormSubmit = (evt) => {
    // 2. Then use this.state.name to update name list
    const names = [ ...this.state.names, this.state.name ];
    this.setState({ names, name: '' });
    evt.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Sign Up Sheet</h1>

        <form onSubmit={this.onFormSubmit}>
          <input
            placeholder='Name'
            value={this.state.name}
            onChange={this.onNameChange}
          />

          <input type='submit' />
        </form>

        <div>
          <h3>Names</h3>
          <ul>
            { this.state.names.map((name, i) => <li key={i}>{name}</li>) }
          </ul>
        </div>
      </div>
    );
  }
};
