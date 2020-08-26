import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    }
    
  componentDidMount() {
   this.setInterval = setInterval(() => {
        console.log('setInterval')
        if (this.state.count < 8) { 
        this.setState({
          count: this.state.count + 1
        })
        } else {
          this.setState({
            count: 0
          })
        }      
    }, 1000) 
}
componentWillUnmount() {
  clearInterval(this.interval)
}
  render() {
    return (
      <center>
        <h1>{this.state.count}</h1>
        <h2>{this.state.count >= 8 ? 'BOOM!' : this.state.count % 2 === 0 ? 'tick' : 'tock'}</h2>
      </center>
      
    )
  }
}

export default Bomb;