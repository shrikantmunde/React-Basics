import React, { Component } from 'react';

class Screen extends Component {
  state = {
    show: false,
    name:'Shrikant'
  }

  onShow = () => {
    console.log(this.state.show);
    this.setState({ show: !this.state.show })
  }

  render() {
    let form;
    if (this.state.show) {
      form = (
        <form>
          <input type="text"  />
        </form>
      )
    }

    return (
      <div>
        <button onClick={this.onShow}>{this.props.buttonName}</button>
        {form}
      </div>
    );
  }
}

export default Screen;
