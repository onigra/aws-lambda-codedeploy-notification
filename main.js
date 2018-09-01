const https = require("https");
const util = require("util");
const { severity } = require("src/severity.js");
const { formatFields } = require("src/formatFields.js");

exports.handler = (event, context) => {
  const payload = {
    channel: process.env.CHANNEL,
    username: "AWS SNS via Lamda :: CodeDeploy Status",
    text: "*" + event.Records[0].Sns.Subject + "*",
    icon_emoji: ":aws:",
    attachments: [
      {
        color: severity(event.Records[0].Sns.Message),
        fields: formatFields(event.Records[0].Sns.Message)
      }
    ]
  };

  const options = {
    method: "POST",
    hostname: "hooks.slack.com",
    port: 443,
    path: process.env.WEBHOOK_PATH
  };

  const request = https.request(options, (response) => {
    response.setEncoding("utf8");
    response.on("data", (chunk) => {
      context.done(null);
    });
  });

  request.on("error", (e) => {
    console.log("problem with request: " + e.message);
  });

  request.write(util.format("%j", payload));
  request.end();
};
