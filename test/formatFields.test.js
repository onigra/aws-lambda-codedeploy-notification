const { formatFields } = require("../src/formatFields.js");
const assert = require("power-assert");

describe("Deployment Event", () => {
  test("CREATED", () => {
    const rawMessage = JSON.stringify({
      region: "ap-northeast-1",
      accountId: "000000000000",
      eventTriggerName: "codedeploy-trigger",
      applicationName: "application",
      deploymentId: "d-XXXXXXXXX",
      deploymentGroupName: "deployment-group",
      createTime: "Fri Aug 31 04:03:48 UTC 2018",
      completeTime: null,
      status: "CREATED"
    });

    assert.deepEqual(formatFields(rawMessage), [
      { short: true, title: "Task", value: "codedeploy-trigger" },
      { short: true, title: "Status", value: "CREATED" },
      { short: true, title: "Application", value: "application" },
      { short: true, title: "Deployment Group", value: "deployment-group" },
      { short: true, title: "Region", value: "ap-northeast-1" },
      { short: true, title: "Deployment Id", value: "d-XXXXXXXXX" },
      {
        short: true,
        title: "Create Time",
        value: "Fri Aug 31 04:03:48 UTC 2018"
      },
      { short: true, title: "Complete Time", value: "" }
    ]);
  });

  test("SUCCEEDED", () => {
    const rawMessage = JSON.stringify({
      region: "ap-northeast-1",
      accountId: "000000000000",
      eventTriggerName: "codedeploy-trigger",
      applicationName: "application",
      deploymentGroupName: "deployment-group",
      createTime: "Fri Aug 31 04:03:48 UTC 2018",
      completeTime: "Fri Aug 31 04:07:45 UTC 2018",
      deploymentOverview: '{"Succeeded":2,"Failed":0,"Skipped":0,"InProgress":0,"Pending":0}',
      status: "SUCCEEDED"
    });

    assert.deepEqual(formatFields(rawMessage), [
      { short: true, title: "Task", value: "codedeploy-trigger" },
      { short: true, title: "Status", value: "SUCCEEDED" },
      { short: true, title: "Application", value: "application" },
      { short: true, title: "Deployment Group", value: "deployment-group" },
      { short: true, title: "Region", value: "ap-northeast-1" },
      { short: true, title: "Deployment Id", value: undefined },
      {
        short: true,
        title: "Create Time",
        value: "Fri Aug 31 04:03:48 UTC 2018"
      },
      {
        short: true,
        title: "Complete Time",
        value: "Fri Aug 31 04:07:45 UTC 2018"
      },
      { short: true, title: "Succeeded", value: 2 },
      { short: true, title: "Failed", value: 0 },
      { short: true, title: "Skipped", value: 0 },
      { short: true, title: "In Progress", value: 0 },
      { short: true, title: "Pending", value: 0 }
    ]);
  });
});

describe("Instance Event", () => {
  test("InProgress", () => {
    const rawMessage = JSON.stringify({
      region: "ap-northeast-1",
      accountId: "000000000000",
      eventTriggerName: "codedeploy-trigger",
      deploymentId: "d-XXXXXXXXX",
      instanceId: "i-zzzzzzzzzzzzzzzzz",
      lastUpdatedAt: "Fri Aug 31 04:03:54 UTC 2018",
      instanceStatus: "InProgress",
      lifecycleEvents: ""
    });

    assert.deepEqual(formatFields(rawMessage), [
      { short: true, title: "Task", value: "codedeploy-trigger" },
      { short: true, title: "Status", value: undefined },
      { short: true, title: "Application", value: undefined },
      { short: true, title: "Deployment Group", value: undefined },
      { short: true, title: "Region", value: "ap-northeast-1" },
      { short: true, title: "Deployment Id", value: "d-XXXXXXXXX" },
      { short: true, title: "Create Time", value: undefined },
      { short: true, title: "Complete Time", value: "" }
    ]);
  });

  test("Succeeded", () => {
    const rawMessage = JSON.stringify({
      region: "ap-northeast-1",
      accountId: "000000000000",
      eventTriggerName: "codedeploy-trigger",
      deploymentId: "d-XXXXXXXXX",
      instanceId: "i-zzzzzzzzzzzzzzzzz",
      lastUpdatedAt: "Fri Aug 31 04:07:43 UTC 2018",
      instanceStatus: "Succeeded",
      lifecycleEvents: ""
    });

    assert.deepEqual(formatFields(rawMessage), [
      { short: true, title: "Task", value: "codedeploy-trigger" },
      { short: true, title: "Status", value: undefined },
      { short: true, title: "Application", value: undefined },
      { short: true, title: "Deployment Group", value: undefined },
      { short: true, title: "Region", value: "ap-northeast-1" },
      { short: true, title: "Deployment Id", value: "d-XXXXXXXXX" },
      { short: true, title: "Create Time", value: undefined },
      { short: true, title: "Complete Time", value: "" }
    ]);
  });
});
