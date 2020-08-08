import React, { Component } from "react";

class InputField extends Component {
  state = { term: 0 };

  onFormSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form
          onSubmit={(event) => this.onFormSubmit(event)}
          className="ui form"
        >
          <div className="ui grid">
            <div className="fourteen wide column">
              <div className="field">
                <input
                  value={this.state.value}
                  onChange={(event) =>
                    this.setState({ term: event.target.value })
                  }
                  placeholder="Enter number here"
                  required
                />
              </div>
            </div>
            <div className="one wide column">
              <div className="field">
                <button className="ui primary button">Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InputField;
