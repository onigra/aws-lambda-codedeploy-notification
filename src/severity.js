const warningMessages = [
  " aborted operation.",
  " to YELLOW",
  "Adding instance ",
  "Degraded to Info",
  "Deleting SNS topic",
  "is currently running under desired capacity",
  "Ok to Info",
  "Ok to Warning",
  "Pending Initialization",
  "Removed instance ",
  "Rollback of environment"
];

const dangerMessages = [
  " but with errors",
  " to RED",
  "During an aborted deployment",
  "FAILED",
  "Failed to deploy application",
  "Failed to deploy configuration",
  "has a dependent object",
  "is not authorized to perform",
  "Pending to Degraded",
  "Stack deletion failed",
  "Unsuccessful command execution",
  "You do not have permission",
  "Your quota allows for 0 more running instance"
];

exports.severity = message => {
  if (dangerMessages.includes(message)) {
    return "danger";
  }

  if (warningMessages.includes(message)) {
    return "warning";
  }

  return "good";
};
