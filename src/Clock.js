import React from 'react';
import Redact from './Redact';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date() };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.text= this.state.date.toLocaleTimeString();
      this.checked = false;
    }
    
    

    handleInputChange(event) {
        this.checked = !this.checked;
        this.Checker(this.checked);

    }
    


    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    Checker(check) {
      if(check) this.text=this.state.date.toUTCString();
      else this.text=this.state.date.toLocaleTimeString();
    }

    tick() {
      this.setState({
        date: new Date()
      });
      this.Checker(this.checked);
    }
  
    render() {
      return (
        <div>
          <h1>Сегодняшняя дата</h1>
          <h2>Сейчас {this.text}.</h2>
          <label>
          Использован формат UTC:
          <input
            name="isGoing"
            type="checkbox"
            onChange={this.handleInputChange}  />
        </label>
        </div>
      );
    }
  }
  
  export default Clock;