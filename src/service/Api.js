export function fetchData() {
  let namePromise = getName();
  let degPromise = setDesignation();
  return {
    name: wrapPromise(namePromise),
    designation: wrapPromise(degPromise),
  };
}

function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Prabhat Ranjan");
    }, 3000);
  });
}

function setDesignation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am Software Devloper");
    }, 3000);
  });
}

function wrapPromise(promise) {
  let status = "Pending";
  let result;
  let suspended = promise.then(
    (r) => {
      status = "Success";
      result = r;
    },
    (e) => {
      status = "Error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "Pending") {
        throw suspended;
      } else if (status === "Error") {
        throw result;
      } else if (status === "Success") {
        return result;
      }
    },
  };
}
