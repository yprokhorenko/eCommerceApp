import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // </React.StrictMode>
  // <Auth0Provider
  //   domain="dev-rnk6cgynw55npfdu.us.auth0.com"
  //   clientId="hmB86Cp7osDoAO6PbJf5LNjnnib0eUd7"
  //   authorizationParams={{
  //     redirect_uri: window.location.origin,
  //   }}
  // >
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  /* </Auth0Provider> */
);

//
//
