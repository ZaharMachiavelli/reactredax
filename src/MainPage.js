import React from "react";
import Clock from "./Clock.js";
import Dataeditor from "./Dataeditor.js";

function NewPage(props) {
  if (props.cons)
    return (
      <Clock
        editClick={props.editClick}
        dayValue={props.dayValue}
        yearValue={props.yearValue}
        monthValue={props.monthValue}
        isDateEditing={props.isDateEditing}
      />
    );
  else
    return (
      <Dataeditor
        dayValue={props.dayValue}
        monthValue={props.monthValue}
        yearValue={props.yearValue}
        ValueChange={props.ValueChange}
        editClick={props.editClick}
        SaveData={props.DataSave}
      />
    );
}

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: true,
      dayValue: "",
      yearValue: "",
      monthValue: "0",
      isDateEditing: false,
    };
    this.editClick = this.editClick.bind(this);
    this.ValueChange = this.ValueChange.bind(this);
    this.DataSave = this.DataSave.bind(this);
  }

  editClick() {
    this.setState(function (state, props) {
      return {
        dayValue : "",
        yearValue: "",
        monthValue:"0",
        clicked: !state.clicked,
        isDateEditing: false,
      };
    });
  }

  DataSave() {
    this.setState({
      isDateEditing: true,
      clicked: !this.state.clicked,
    });
    
  }

  ValueChange(dataname, datavalue) {
    this.setState({[dataname]:datavalue});
  }

  render() {
    return (
      <div>
        <NewPage
          cons={this.state.clicked}
          dayValue={this.state.dayValue}
          monthValue={this.state.monthValue}
          yearValue={this.state.yearValue}
          ValueChange={this.ValueChange}
          editClick={this.editClick}
          DataSave={this.DataSave}
          isDateEditing={this.state.isDateEditing}
        />
      </div>
    );
  }
}

export default MainPage;
