import React, { Component } from 'react'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: ''
    }
  }  

  onChangeHandler = (e) => {
    this.setState({ text : e.target.value })
  }

  onSubmit = () => {
    this.props.submit(this.state.text)
    this.setState({ text: '' })
  }

  render () {
    return (
      <>
        <p>Add Todo</p>
        <div className="form-group">
          <input 
          value={this.state.text}
          onChange={this.onChangeHandler} type="text" className="form-control" placeholder="Type todo here" />
        </div>
        <button onClick={this.onSubmit} className="btn btn-primary">Add</button>
      </>
    )
  }
} 

export default Form
