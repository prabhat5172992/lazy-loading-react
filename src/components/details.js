import React from "react";
import { fetchData } from "../service/Api";

const resource = fetchData();

function Name() {
  const name = resource.name.read();
  return (
    <div>
      <h2>
        <u>Name:</u>
      </h2>
      <h3>{name}</h3>
    </div>
  );
}

function Degination() {
  const degination = resource.designation.read();
  return (
    <div>
      <h2>
        <u>Designation:</u>
      </h2>
      <h3>{degination}</h3>
    </div>
  );
}

export default () => {
  return (
    // <Suspense fallback={<h2>Loading---</h2>}>
    <div>
      <h2>My Details</h2>
      <div>
        <div>
          <Name />
        </div>
        <div>
          <Degination />
        </div>
      </div>
    </div>
    // </Suspense>
  );
};
