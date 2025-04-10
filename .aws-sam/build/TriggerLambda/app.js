const { EventBridgeClient, PutEventsCommand } = require("@aws-sdk/client-eventbridge");

const client = new EventBridgeClient({ region: "ap-south-1" });

exports.handler = async (event) => {
  const params = {
    Entries: [
      {
        Source: "custom.app.event",
        DetailType: "executeLambda",
        Detail: JSON.stringify({ message: "Event triggered successfully!" }),
        EventBusName: process.env.EVENT_BUS_NAME,
      },
    ],
  };

  try {
    const data = await client.send(new PutEventsCommand(params));
    console.log("Event sent:", data);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Event sent to EventBridge!" }),
    };
  } catch (err) {
    console.error("Error sending event:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send event" }),
    };
  }
};
