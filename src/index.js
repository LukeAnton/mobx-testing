import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "mobx-react";
import BirdStore from "./stores/BirdStore";

const Root = (
  <Provider BirdStore={BirdStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
