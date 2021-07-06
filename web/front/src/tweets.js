import React from "react";
import ReactDOM from "react-dom";
import { Tweets } from "../screens/Tweets";

let props;
try {
  props = { ...context };
} catch (e) {
  props = {};
}

ReactDOM.render(<Tweets {...props}></Tweets>, document.getElementById("root"));
if (module.hot) {
  module.hot.accept();
}
