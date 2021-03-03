import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.DataCheck() };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.text = this.state.date.toLocaleTimeString();
    this.checked = false;
    this.ButClick = this.ButClick.bind(this);
    this.DataCheck = this.DataCheck.bind(this);
    this.InputCoreect = this.InputCoreect.bind(this);
  }

  DataCheck() {
    if (this.InputCoreect()) {
      return new Date(
        Number.parseInt(this.props.yearvalue),
        Number.parseInt(this.props.monthvalue),
        Number.parseInt(this.props.value) + 1
      );
    } else {
      return new Date();
    }
  }

  InputCoreect() {
    if (
      !Number.isNaN(this.props.value) &&
      this.props.monthvalue != "" &&
      !Number.isNaN(this.props.yearvalue) &&
      this.props.value != "" &&
      this.props.yearvalue != "" &&
      this.props.letchange
    ) {
      console.log("Я здесь");
      if (
        ["0", "2", "4", "6", "7", "9", "11"].indexOf(this.props.monthvalue) !=
          -1 &&
        Number.parseInt(this.props.value) < 32 &&
        Number.parseInt(this.props.value) > 0
      )
        return true;
      if (
        ["3", "5", "8", "10"].indexOf(this.props.monthvalue) != -1 &&
        Number.parseInt(this.props.value) < 31 &&
        Number.parseInt(this.props.value) > 0
      )
        return true;
      if (
        this.props.monthvalue == "1" &&
        Number.parseInt(this.props.value) < 29 &&
        Number.parseInt(this.props.value) > 0
      )
        return true;
    }
    console.log("тута+здеся");
    return false;
  }

  handleInputChange(event) {
    console.log(this.props.yearvalue, this.props.monthvalue, this.props.value);
    console.log(this.props.letchange);
    this.checked = !this.checked;
    this.Checker(this.checked);
  }

  ButClick() {
    this.props.ButtonClick();
  }

  Checker(check) {
    if (check) this.text = this.state.date.toUTCString();
    else this.text = this.state.date.toLocaleTimeString();
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
          <button onClick={this.ButClick}>Редактировать</button>
        </div>
      </div>
    );
  }
}

export default Clock;
