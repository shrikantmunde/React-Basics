import React from 'react'

function IPAddressComponent(props) {
  return (
    <div>
      {props.isFetchingGLobal && <p>{props.loadingMessage}</p>}
      {props.error && <p>{props.error}</p>}
      <h1>{props.ip}</h1>
    </div>
  )
}

IPAddressComponent.propTypes = {
  isFetchingGLobal: React.PropTypes.bool,
  error: React.PropTypes.string,
  ip: React.PropTypes.string,
  loadingMessage: React.PropTypes.string,
  text: React.PropTypes.node
};

IPAddressComponent.defaultProps = {
  ip: '1.2.3.4',
  loadingMessage: 'Ok I am LOADING!!!'
};

export default IPAddressComponent;
