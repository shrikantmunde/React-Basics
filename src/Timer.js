import React, { Component } from 'react';
import Text from './Text'

class Timer extends Component {
  static propTypes = {
    title: React.PropTypes.string
  }

  // constructor(props) {
  //   //super allows you to access the constructor method of the parent class. The only reason to include props is to access this.props inside of your constructor.
  //   super(props); 
  // }

  state = {
    date: new Date(),
    color: 'black'
  }

  componentWillMount(){
    //This gets called before render gets called
    //This is the only lifecycle method called on server rendering. 
    console.log('I am the first one to get called')
  }
  
  componentWillUpdate() {
    //This will get called after any change or any click events
    console.log('Update')
  }
  
  componentDidMount() {
    //will get called after render gets called
    console.log('Did Mount getting called after reder')
    window.setInterval(this.handleTimer, 1000);
  }

  handleTimer = () => {
    this.setState({ date: new Date() })
  }

  onMakeMeRed = () => {
    this.setState({ color: 'red' })
  }

  render() {
    const style = {
      color: this.state.color
    }

    return (
      <div>
        <div style={style}>
          <Text text={this.props.title} color={this.state.color} isActive={true}/>
          <div>{this.state.date.toLocaleString()}</div>
          <button onClick={this.onMakeMeRed}>Click me</button>
        </div>        
      </div>
    );
  }
}

export default Timer;
