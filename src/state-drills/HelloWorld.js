import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = { who: ''}
    this.handleButtonClick = (change) => {
      this.setState({
        who: change,
      })
    }

  }
  render() {
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button onClick={() => this.handleButtonClick('World')}>World</button>
        <button onClick={() => this.handleButtonClick('React')}>React</button> 
        <button onClick={() => this.handleButtonClick('Friend')}>Friend</button> 
      </div>
      
    )
  }
}


export default HelloWorld;