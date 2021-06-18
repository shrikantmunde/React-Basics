import React, { Component } from 'react';
import IPAddressComponent from './IPAddressComponent'
import Text from './Text'

class IPAddressContainer extends Component {
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

    window.fetch('https://api.ipify.org/?format=json')
      .then(onServerResponded)
      .then(processJSON)
      .catch(onFetchError)
  }


  render() {
    const {
      isFetching,
      error,
      ip
    } = this.state;

    return <div>
     <Text text="Asyn API call using dump component " colorofthat="cyan" isActive={true}/>
    <IPAddressComponent isFetchingGLobal={isFetching} error={error} ip={ip} loadingMessage='Loading'/>
    </div>
  }
}

export default IPAddressContainer;
