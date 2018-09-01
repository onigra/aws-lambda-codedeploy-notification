function deploymentInfo(message) {
  return [
    {
      title: "Task",
      value: message.eventTriggerName,
      short: true
    },
    {
      title: "Status",
      value: message.status,
      short: true
    },
    {
      title: "Application",
      value: message.applicationName,
      short: true
    },
    {
      title: "Deployment Group",
      value: message.deploymentGroupName,
      short: true
    },
    {
      title: "Region",
      value: message.region,
      short: true
    },
    {
      title: "Deployment Id",
      value: message.deploymentId,
      short: true
    },
    {
      title: "Create Time",
      value: message.createTime,
      short: true
    },
    {
      title: "Complete Time",
      value: message.completeTime ? message.completeTime : "",
      short: true
    }
  ];
}

function deploymentOverview(deploymentOverview) {
  return [
    {
      title: "Succeeded",
      value: deploymentOverview.Succeeded,
      short: true
    },
    {
      title: "Failed",
      value: deploymentOverview.Failed,
      short: true
    },
    {
      title: "Skipped",
      value: deploymentOverview.Skipped,
      short: true
    },
    {
      title: "In Progress",
      value: deploymentOverview.InProgress,
      short: true
    },
    {
      title: "Pending",
      value: deploymentOverview.Pending,
      short: true
    }
  ];
}

function fields(message) {
  if (message.deploymentOverview) {
    return deploymentInfo(message).concat(
      deploymentOverview(JSON.parse(message.deploymentOverview))
    );
  } else {
    return deploymentInfo(message);
  }
}

exports.formatFields = rawMessage => {
  const message = JSON.parse(rawMessage);

  if (message) {
    return fields(message);
  } else {
    return [];
  }
};
