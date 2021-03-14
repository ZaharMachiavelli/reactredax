import React from "react";

class Dataeditor extends React.Component {
  constructor(props) {
    super(props);
    this.handlechange = this.handlechange.bind(this);
    this.cancelClick = this.cancelClick.bind(this);
    this.Buttonsave = this.Buttonsave.bind(this);
  }

  handlechange(e) {
    this.props.ValueChange(e.target.name, e.target.value);
  }

  cancelClick() {
    this.props.editClick();
  }

  Buttonsave() {
    this.props.SaveData();
    
  }

  render() {
    const day = this.props.dayValue;
    const month = this.props.monthValue;
    const year = this.props.yearValue;
    return (
      <div>
        <form>
          <label>
            День
            <input
              type="text"
              name="dayValue"
              value={day}
              onChange={this.handlechange}
            ></input>
          </label>
          <select value={month} onChange={this.handlechange} name="monthValue">
            <option value="0">Январь</option>
            <option value="1">Февраль</option>
            <option value="2">Март</option>
            <option value="3">Апрель</option>
            <option value="4">Май</option>
            <option value="5">Июнь</option>
            <option value="6">Июль</option>
            <option value="7">Август</option>
            <option value="8">Сентябрь</option>
            <option value="9">Октябрь</option>
            <option value="10">Ноябрь</option>
            <option value="11">Декабрь</option>
          </select>
          <label>
            Год
            <input
              type="text"
              name="yearValue"
              value={year}
              onChange={this.handlechange}
            ></input>
          </label>
        </form>
        <button onClick={this.Buttonsave}>Сохранить</button>
        <div>
          <button onClick={this.cancelClick}>Отменить</button>
        </div>
      </div>
    );
  }
}

export default Dataeditor;
