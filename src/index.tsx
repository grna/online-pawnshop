import React from "react";
import { render } from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <div>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </div>,
  document.getElementById("root")
);
