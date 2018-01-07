import React, { Component } from "react";

class Todo extends Component {
  handleOnClick = () => {
    this.props.store.dispatch({ type: "DELETE_TODO", id: this.props.id });
  };
  render() {
    return (
      <li>
        {this.props.text}
        <button onClick={this.handleOnClick}>
          <img
            src="http://agnesday.com/wp-content/uploads/2012/05/deletered.png"
            alt="Delete"
            width="10px"
          />
        </button>
      </li>
    );
  }
}

export default Todo;
