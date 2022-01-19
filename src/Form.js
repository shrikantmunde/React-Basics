import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: 'Shrikant',
    age: '21',
    address: 'India'
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleChangeAge = (event) => {
    this.setState({
      ['name']: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input name="name" onChange={this.handleChange} value={this.state.name} /><br />
        <input name="age" onChange={this.handleChangeAge} value={this.state.age} /><br />
        <input name="address" onChange={this.handleChange} value={this.state.address} />
      </div>
    );
  }
}

export default Form;
