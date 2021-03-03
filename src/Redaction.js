import React from "react";

class Redaction extends React.Component {
  constructor(props) {
    super(props);
    this.handlechange = this.handlechange.bind(this);
    this.ButClick = this.ButClick.bind(this);
    this.Buttonsave = this.Buttonsave.bind(this);
  }

  handlechange(e) {
    this.props.ValueChange(e.target.name, e.target.value);
  }

  ButClick() {
    this.props.ButtonClick();
  }

  Buttonsave() {
    this.props.SaveData();
  }

  render() {
    const day = this.props.value;
    const month = this.props.monthvalue;
    const year = this.props.yearvalue;
    return (
      <div>
        <form>
          <label>
            День
            <input
              type="text"
              name="day"
              value={day}
              onChange={this.handlechange}
            ></input>
          </label>
          <select value={month} onChange={this.handlechange} name="months">
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
              name="year"
              value={year}
              onChange={this.handlechange}
            ></input>
          </label>
        </form>
        <button onClick={this.Buttonsave}>Сохранить</button>
        <div>
          <button onClick={this.ButClick}>Отменить</button>
        </div>
      </div>
    );
  }
}

export default Redaction;
