import React from 'react';
import Clock from './Clock';
import Nihua from './Nuhua'

function NewPage(props) {
    if (props.cons) return <Clock />
    else return <Nihua/>
}

class Redact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {clicked:true, text:"Редактировать"};
      this.ButtonClick = this.ButtonClick.bind(this);
    }

    ButtonClick() {
        this.setState(function(state,props) {
           return {
            clicked: !state.clicked
           }; 
        });
        console.log(this.state.clicked);
        if(this.state.clicked) {
            this.state.text="Отменить";
        }
        else {
            this.state.text="Редактировать";
        }
    }

     

    render() {
        return (
            <div>
                <NewPage cons={this.state.clicked} />
                <button onClick={this.ButtonClick}>{this.state.text}</button>
                
            </div>
        );
    }
}

export default Redact;