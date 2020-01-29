import React from 'react';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text : ''
        };
        // this.handleClick.bind(this)
    }
    handleClick = () => {
      
   this.setState({ text: "The button was clicked" })
  
}


    render(){
        return(
            <div>
            <button onClick={this.handleClick}>
            Click me
            </button>
            <p>
            {this.state.text || this.props.text}</p>
          
          </div>
        )
    }
}


export default Button;