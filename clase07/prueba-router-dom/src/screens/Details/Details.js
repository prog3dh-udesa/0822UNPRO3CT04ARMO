import React, {Component} from 'react'

class Details extends Component {
  constructor(props){
    super(props)
    this.state={
      id:props.match.params.id,
      character:{}
    }
  }

  componentDidMount(){
    fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`)
    .then(resp => resp.json())
    .then(data => this.setState({
      character: data
    }))
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div>
        <img src={this.state.character.image} />
      </div>
    )
  }
}

export default Details
