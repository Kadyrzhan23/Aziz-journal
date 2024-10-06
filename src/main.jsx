import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import  router  from "./router/index.jsx";
import './utils/18n.js'
import { Provider } from "react-redux";
import { store } from "./store/store.js";
// console.log(router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}>
      <Suspense fallback={<div className="">Loading...</div>}>

      </Suspense>
    <App />
    </RouterProvider>
    </Provider>
  </React.StrictMode>
);
