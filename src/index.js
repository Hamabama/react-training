import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  render() {
    return React.createElement("h1", null, "Hello world");
  }
}

class PureHello extends React.PureComponent {
  render() {
    return React.createElement("h2", null, "Pure Hello world");
  }
}

const FunHello = () => <h3>Functional Hello World</h3>;

const App = () => (
  <div>
    <Hello />
    <PureHello />
    <FunHello />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
