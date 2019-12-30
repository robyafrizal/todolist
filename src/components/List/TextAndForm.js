import React, { Component } from "react";
import { connect } from "react-redux";

import { editTodo, deleteTodo } from "../../store/actions/todoAction";

class TextAndForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMode: "show",
      text: props.todo
    };
  }
  buttonEditHandler = () => {
    this.setState({ viewMode: "edit" });
  };
  buttonSaveHandler = () => {
    this.props.editTodo(this.props.index, this.state.text);
    this.setState({ viewMode: "show" });
  };
  buttonCancelHandler = () => {
    this.setState({ viewMode: "show" });
  };
  buttonDeleteHandler = () => {
    this.props.deleteTodo(this.props.index);
  };

  onChangeHandler = e => {
    this.setState({ text: e.target.value });
  };

  render() {
    let todo = <p>{this.props.todo}</p>; //element text todo
    let buttonEdit = (
      <button className="btn btn-primary" onClick={this.buttonEditHandler}>
        Edit
      </button>
    );

    //jika viewMode berubah jadi 'edit'
    if (this.state.viewMode === "edit") {
      //element text todo akan menjadi form input
      todo = (
        <input
          className="form-control"
          type="text"
          value={this.state.text}
          onChange={this.onChangeHandler}
        />
      );
      buttonEdit = (
        <div>
          <button className="btn btn-success" onClick={this.buttonSaveHandler}>
            Save
          </button>
          <button
            className="btn btn-warning"
            onClick={this.buttonCancelHandler}
          >
            Cancel
          </button>
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col-8">{todo}</div>
        <div className="col-4">
          {buttonEdit}
          <button className="btn btn-danger" onClick={this.buttonDeleteHandler}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editTodo: (index, todo) => dispatch(editTodo({ index, todo })),
    deleteTodo: index => dispatch(deleteTodo(index))
  };
};

export default connect(null, mapDispatchToProps)(TextAndForm);
