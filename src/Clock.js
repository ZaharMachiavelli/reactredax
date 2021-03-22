import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.DataCheck() };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.text = this.state.date.toLocaleString();
    this.checked = false;
    this.editDataClick = this.editDataClick.bind(this);
    this.DataCheck = this.DataCheck.bind(this);
    this.InputCoreect = this.InputCoreect.bind(this);
  }

  DataCheck() {
    if (this.InputCoreect()) {
      return new Date(
        Number.parseInt(this.props.yearValue),
        Number.parseInt(this.props.monthValue),
        Number.parseInt(this.props.dayValue),23,0,0
      );
    } else {
      return new Date();
    }
  }

  InputCoreect() {
    if (
      !Number.isNaN(this.props.dayValue) &&
      this.props.monthValue != "" &&
      !Number.isNaN(this.props.yearvalue) &&
      this.props.dayValue != "" &&
      this.props.yearValue != "" &&
      this.props.isDateEditing
    ) {
      if (
        ["0", "2", "4", "6", "7", "9", "11"].indexOf(this.props.monthValue) !=
          -1 &&
        Number.parseInt(this.props.dayValue) < 32 &&
        Number.parseInt(this.props.dayValue) > 0
      )
        return true;
      if (
        ["3", "5", "8", "10"].indexOf(this.props.monthValue) != -1 &&
        Number.parseInt(this.props.dayValue) < 31 &&
        Number.parseInt(this.props.dayValue) > 0
      )
        return true;
      if (
        this.props.monthValue == "1" &&
        Number.parseInt(this.props.dayValue) < 29 &&
        Number.parseInt(this.props.dayValue) > 0
      )
        return true;
    }
    return false;
  }

  handleInputChange(event) {
    console.log(this.props.yearvalue, this.props.monthvalue, this.props.value);
    console.log(this.props.letchange);
    this.checked = !this.checked;
    this.Checker(this.checked);
  }

  editDataClick() {
    this.props.editClick();
  }

  Checker(check) {
    if (check) this.text = this.state.date.toUTCString();
    else this.text = this.state.date.toLocaleString();
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
            onChange={this.handleInputChange}
          />
        </label>
        <div>
          <button onClick={this.editDataClick}>Редактировать</button>
        </div>
      </div>
    );
  }
}

export default Clock;
