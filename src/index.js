import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import ReactGA from "react-ga4";


// ReactDOM.render(<App />, document.getElementById("root"));

ReactGA.initialize([
    {
      trackingId: "your GA measurement id",
      gaOptions: {}, // optional
      gtagOptions: {config: {
        page_title: 'Travel Destinations',
        currency: 'USD', 
        floor: "10 th FLoor",
        building: "My Home Vihanga",
        flat: 2015
      }}, // optional
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);