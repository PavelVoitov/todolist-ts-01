import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import App from "./app/App";
import {store} from "app/store";
import {HashRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>
)

serviceWorker.unregister();