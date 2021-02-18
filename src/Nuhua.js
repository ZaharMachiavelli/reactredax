import React from 'react';
import Redact from './Redact.js'

class Nihua extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value:'',yearvalue:'',monthvalue:''}
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeag = this.handleChangeag.bind(this);
      this.monthChanging = this.monthChanging.bind(this);
      
      
    }

    handleChange(event) {
      this.setState({
        yearvalue: event.target.value
      })
    }

    handleChangeag(event) {
      this.setState({
        value:event.target.value
      })
    }

    monthChanging(event) {
      this.setState({
        monthvalue:event.target.value
      })
      console.log(this.state.monthvalue)
    }
    



    render() {
      return (
        <div >
          <form>
          <label>
            День
            <input type="text" name="day" value={this.state.value} onChange={this.handleChangeag}></input>
          </label>
          <select value={this.state.monthvalue} onChange={this.monthChanging}>
            <option value="January">Январь</option>
            <option value="February">Февраль</option>
            <option value="March">Март</option>
            <option value="April">Апрель</option>
            <option value="May">Май</option>
            <option value="June">Июнь</option>
            <option value="July">Июль</option>
            <option value="August">Август</option>
            <option value="September">Сентябрь</option>
            <option value="October">Октябрь</option>
            <option value="November">Ноябрь</option>
            <option value="December">Декабрь</option>
          </select>
          <label>
            Год
            <input type="text" name="year" value={this.state.yearvalue} onChange={this.handleChange}></input>
          </label>
          </form>
          <button>Сохранить</button>
          
        </div>
      );
    }
    
  }

export default Nihua;