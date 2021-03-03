import React from "react";
import Clock from "./Clock.js";
import Redaction from "./Redaction.js";

function NewPage(props) {
  if (props.cons)
    return (
      <Clock
        ButtonClick={props.ButtonClick}
        value={props.value}
        yearvalue={props.yearvalue}
        monthvalue={props.monthvalue}
        letchange={props.letchange}
      />
    );
  else
    return (
      <Redaction
        value={props.value}
        monthvalue={props.monthvalue}
        yearvalue={props.yearvalue}
        ValueChange={props.ValueChange}
        ButtonClick={props.ButtonClick}
        SaveData={props.DataSave}
      />
    );
}

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      text: "Редактировать",
      value: "",
      yearvalue: "",
      monthvalue: "0",
      letchange: false,
    };
    this.ButtonClick = this.ButtonClick.bind(this);
    this.ValueChange = this.ValueChange.bind(this);
    this.DataSave = this.DataSave.bind(this);
  }

  ButtonClick() {
    this.setState(function (state, props) {
      return {
        clicked: !state.clicked,
        letchange: false,
      };
    });
  }

  DataSave() {
    this.setState({
      letchange: true,
      clicked: !this.state.clicked,
    });
    console.log(this.state.letchange);
  }

  ValueChange(dataname, datavalue) {
    if (dataname == "day") {
      this.setState({ value: datavalue });
      
    }
    if (dataname == "months") {
      this.setState({ monthvalue: datavalue });
    }
    if (dataname == "year") {
      this.setState({ yearvalue: datavalue });
      
    }
  }

  render() {
    return (
      <div>
        <NewPage
          cons={this.state.clicked}
          value={this.state.value}
          monthvalue={this.state.monthvalue}
          yearvalue={this.state.yearvalue}
          ValueChange={this.ValueChange}
          ButtonClick={this.ButtonClick}
          DataSave={this.DataSave}
          letchange={this.state.letchange}
        />
      </div>
    );
  }
}

export default MainPage;
