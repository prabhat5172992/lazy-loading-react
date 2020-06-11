import React, { lazy, Suspense } from "react";
import "./App.css";
import Loading from "./components/loading";
import Details from "./components/details";
const Second = lazy(() => import("./components/second"));

/* React Suspense is used for cuncurrent loading of data */
/* React lazy loading is used to load the data when it is 
available without letting react app fall into error */

function App() {
  return (
    <div className="App">
      <h1>First Component</h1>
      <Suspense fallback={<Loading />}>
        <Second />
        <div>------------------------------------------------------------</div>
        <br />
        <br />
        <Details />
      </Suspense>
    </div>
  );
}

export default App;
