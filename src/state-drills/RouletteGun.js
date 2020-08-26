import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      chamber: null,
      spinningTheChamber: false,  
      bulletInChamber: 8,
    }
    console.log(this.state.bulletInChamber + ' = Loaded Chamber')
    this.handleButtonClick = () => {
      this.setState({
        spinningTheChamber: true,
        chamber: (Math.ceil(Math.random() * 8)),
      })
      console.log(this.state.chamber + ' = Our chamber fired')
    }
    this.isChamberSpin = () => {
      if (this.state.spinningTheChamber) {
      if (this.state.chamber === this.state.bulletInChamber) {
        return 'BANG!'
      } else {
        return 'SAFE'
      }
    } return;
    }
  }

  componentDidMount() {
    this.setState({
      bulletInChamber: (Math.ceil(Math.random() * 8)),
    })
  }
    
/*   componentDidMount() {
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
} */
  render() {
    return (
      <div>
       <p>{this.isChamberSpin()}</p>
       <button onClick={this.handleButtonClick}>Pull the trigger!</button>
      </div>
    )
  }
}

export default RouletteGun;