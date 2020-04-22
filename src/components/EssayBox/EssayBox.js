import React, { Component } from 'react';
import './EssayBox'

class EssayBox extends Component {

    state = {
        value: ''
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.value)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="EssayBox" type="text" onSubmit={this.handleSubmit}></input>
                    <input type="submit">Remember</input>
                </form>
            </div>
        )
    }
}

export default EssayBox;