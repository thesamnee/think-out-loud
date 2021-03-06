import React, { Component } from 'react';
import './EssayBox.css'

class EssayBox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                    <textarea placeholder="What's on your mind?" className="EssayBox" cols="110" rows="40" type="text" onChange={this.handleChange} onSubmit={this.handleSubmit}></textarea>
                    <input className="button rememberBtn" type="submit" value="Remember"></input>
                </form>
            </div>
        )
    }
}

export default EssayBox;