import React, { Component } from 'react';
import Text from './Text'

class IPAddress extends Component {
  state = {
    ip: '',
    isFetching: false,
    error: ''
  }

  componentDidMount() {
    const onServerResponded = (response) => {
      return response.json();
    }

    const processJSON = (response) => {
      this.setState({
        ip: response.ip,
        isFetching: false
      })
    }

    const onFetchError = (error) => {
      this.setState({
        error: error.message,
        isFetching: false
      })
    }

    this.setState({
      isFetching: true
    })

    window.fetch('https://api.ipify1.org/?format=json')
      .then(onServerResponded)
      .then(processJSON)
      .catch(onFetchError)
  }


  render() {
    return (
      <div>
        <Text text="Asyn API call Example " colorofthat="blue" isActive={true}/>
        {this.state.isFetching && <p>Loading...</p>}        
        {this.state.error && <p>{this.state.error}</p>}
        { (!this.state.isFetching && !this.state.error )&& <h1>
          IP: {this.state.ip}
        </h1>}
      </div>
    );
  }
}

export default IPAddress;
