import React from "react";
import ReactDOM from "react-dom";
import { Index } from "../screens/Index";

let props;
try {
  props = { ...context };
} catch (e) {
  props = {};
}

ReactDOM.render(<Index {...props}></Index>, document.getElementById("root"));
if (module.hot) {
  module.hot.accept();
}
