import React from "react";
import { render } from "react-dom";
import "normalize.css";
import App from "./app";
import { firebase } from "./firebase";

// firebase context
import { FirebaseContext } from "./context/firebase";

// Global Styles
import { GlobalStyles } from "./global-styles";

render(
  <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyles />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
