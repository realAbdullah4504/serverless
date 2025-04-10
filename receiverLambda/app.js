exports.handler = async (event) => {
    console.log("Received event:", JSON.stringify(event, null, 2));
  
    // Process the event (e.g., extract details from event.detail)
    const eventDetails = event.detail;
    console.log("Event Details:", eventDetails);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Event received and processed!" }),
    };
  };
  