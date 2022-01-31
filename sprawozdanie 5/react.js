import React,{Component} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");    script.async = true;    script.src = "https://some-scripturl.js";    this.div.appendChild(script);  }
  render() {
    return (
      <div className="App" ref={el => (this.div = el)}>        <h1>Hello react</h1>
        {/* Script is inserted here */}
      </div>
    );
  }
}

export default App;