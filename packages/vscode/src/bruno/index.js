import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import ReduxStore from "./providers/Store";
import AppProvider from "./providers/App";
import ResponsePane from "./components/ResponsePane";
import "tailwindcss/dist/tailwind.min.css";

const App = () => (
  <Provider store={ReduxStore}>
    <AppProvider>
      <ResponsePane />
    </AppProvider>
  </Provider>
);

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
