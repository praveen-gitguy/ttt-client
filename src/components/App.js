import React from "react";
import axios from "axios";

import InputField from "./InputField";
import ResultTable from "./ResultTable";
import Loading from "./Loading";
import Error from "./Error";

class App extends React.Component {
  state = { resData: "", resStatus: false, loading: false, errRes: null };

  onNumberSubmit = async (n) => {
    this.setState({ loading: true });
    try {
      const response = await axios.get(
        `https://tttprojectapp.herokuapp.com/${n}`
      );
      this.setState({
        resData: response.data,
        resStatus: true,
        loading: false,
      });
    } catch (err) {
      this.setState({
        resData: err.response.data,
        resStatus: true,
        loading: false,
      });
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="ui container">
          <InputField onSubmit={this.onNumberSubmit} />
          <Loading />
        </div>
      );
    }

    if (this.state.resStatus === false) {
      return (
        <div className="ui container">
          <InputField onSubmit={this.onNumberSubmit} />
        </div>
      );
    }

    if (this.state.resData.status === "Error") {
      return (
        <div className="ui container">
          <InputField onSubmit={this.onNumberSubmit} />
          <Error errorData={this.state.resData.error} />
        </div>
      );
    }

    return (
      <div className="ui container">
        <InputField onSubmit={this.onNumberSubmit} />
        <ResultTable data={this.state.resData.data} />
      </div>
    );
  }
}

export default App;
