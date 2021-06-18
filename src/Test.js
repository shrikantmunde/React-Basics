import React, { Component } from 'react';


class Test extends Component {
    state ={
        text: ''
    }

  setKeyword = (e) => {
    this.setState({ text: e.target.value })
  }

  OnClickButton = (value) => {
    console.log(value);
  }
  render(){
    return(
      <div>
        <div>
            <h1>Snapshot</h1>
            <div>
              <input
                value={this.state.text}
                placeholder= 'Search'
                onChange={(e)=>this.setKeyword(e)}
              />
              <button onClick = {() => this.OnClickButton(this.state.text)}>GO</button>
            </div>
        </div>
      </div>);
  }
}
export default Test;