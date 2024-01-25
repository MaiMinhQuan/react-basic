import React from "react";
import "./ListToDo.scss";
import { toast } from "react-toastify";

class AddToDo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddToDo = () => {
    if (!this.state.title) {
      toast.error("Missing title!");
      return;
    }

    let todo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };

    this.props.addNewToDo(todo);

    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleAddToDo()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddToDo;
