const { severity } = require("../src/severity.js");
const assert = require("power-assert");

describe.each([
  [" aborted operation."],
  [" to YELLOW"],
  ["Adding instance "],
  ["Degraded to Info"],
  ["Deleting SNS topic"],
  ["is currently running under desired capacity"],
  ["Ok to Info"],
  ["Ok to Warning"],
  ["Pending Initialization"],
  ["Removed instance "],
  ["Rollback of environment"]
])("return warning", (message) => {
  test(`${message}`, () => {
    assert.equal(severity(message), "warning");
  });
});

describe.each([
  [" but with errors"],
  [" to RED"],
  ["During an aborted deployment"],
  ["FAILED"],
  ["Failed to deploy application"],
  ["Failed to deploy configuration"],
  ["has a dependent object"],
  ["is not authorized to perform"],
  ["Pending to Degraded"],
  ["Stack deletion failed"],
  ["Unsuccessful command execution"],
  ["You do not have permission"],
  ["Your quota allows for 0 more running instance"]
])("return danger", (message) => {
  test(`${message}`, () => {
    assert.equal(severity(message), "danger");
  });
});

describe.each([
  [""],
  [" "],
  ["foobarbaz"],
  ["good"],
  ["bad"],
  ["umm"],
  ["jugemjugemgokounosurikire"]
])("return good", (message) => {
  test(`${message}`, () => {
    assert.equal(severity(message), "good");
  });
});
