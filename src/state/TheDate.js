import React from 'react';
import './TheDate.css'

class Counter extends React.Component {
  constructor(props){
    // super(props);       let's put it in comment for now
    console.log(this);
  }
   render() {
    return (
         console.log(this.props)
    )
     }
 }


export default Counter