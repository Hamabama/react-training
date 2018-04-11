import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement("h1", null, "Hello element");

class Hello extends React.Component {
  render() {
    return <h2>Hello world</h2>;
  }
}

class PureHello extends React.PureComponent {
  render() {
    return <h3>Pure Hello world</h3>;
  }
}

const FunHello = () => <h4>Functional Hello World</h4>;

const App = () => (
  <React.Fragment>
    {element}
    <Hello />
    <PureHello />
    <FunHello />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));
