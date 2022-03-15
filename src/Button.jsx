import React, { Component } from 'react';
    
class Button extends Component {
    render() {
        const { firstName, lastName, aumentarEdad } = this.props;
        return <button onClick={ ()=> aumentarEdad()}>Birthday button for {firstName} {lastName}</button>
    }
}
    
export default Button;