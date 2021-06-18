import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: 'Rob',
    age: '21',
    address: 'England'
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input name="name" onChange={this.handleChange} value={this.state.name} /><br />
        <input name="age" onChange={this.handleChange} value={this.state.age} /><br />
        <input name="address" onChange={this.handleChange} value={this.state.address} />
      </div>
    );
  }
}

export default Form;
