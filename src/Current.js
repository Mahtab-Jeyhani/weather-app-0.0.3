import React from 'react';
import './App.css';

class Current extends React.Component {
  state={
    curDT : new Date().toLocaleString(),
  }
  render(){
    return (
      <div className="date">
        <p>Current Date And Time : {this.state.curDT}</p>
      </div>
    );
  }
}

export default Current;
