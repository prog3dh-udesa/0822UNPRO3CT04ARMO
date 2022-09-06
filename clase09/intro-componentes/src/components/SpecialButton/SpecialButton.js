import React, { Component } from 'react'

class SpecialButton extends Component {
    
    laMagia(){
        document.querySelector('body').style.backgroundColor = '#222'
    }
    
    render(){
        return(
            <button onClick={() => this.laMagia()}>Clickeame para ver la magia</button>
        )
    }
}

export default SpecialButton