/** @format */

const dConsole = (...args: any[]): void => {
  if (process.env["MODE"] !== "DEV") {
    return;
  }

  console.log(...args);
};

export { dConsole };
