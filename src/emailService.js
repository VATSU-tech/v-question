import emailjs from "@emailjs/browser";

// Configuration placeholders - USER MUST FILL THESE
export const EMAIL_CONFIG = {
  SERVICE_ID: "service_as4qew1", // Example: 'service_xyz'
  TEMPLATE_ID: "template_zahvdd9", // Example: 'template_abc'
  PUBLIC_KEY: "MZJsCCdYXwLxRVkQf", // Example: 'user_123'
};

export const sendResponse = async (response, details) => {
  const templateParams = {
    to_name: "My Valentine", // You can customize this
    from_name: details.sender || "Anonymous",
    message: `Nouvelle activité : ${response}`,
    reply_to: details.email || "no-reply@example.com",
    detailed_response: `
      Event: ${response}
      Sender: ${details.sender}
      Receiver: ${details.receiver}
      Time: ${new Date().toLocaleString()}
      Details: ${details.extra || ""}
    `,
  };

  try {
    if (
      EMAIL_CONFIG.SERVICE_ID.startsWith("service_") &&
      EMAIL_CONFIG.SERVICE_ID !== "YOUR_SERVICE_ID"
    ) {
      // Valid configuration detected
    } else {
      console.warn("EmailJS not configured. Simulating success for:", response);
      return { status: 200, text: "Simulated OK" };
    }
    const result = await emailjs.send(
      EMAIL_CONFIG.SERVICE_ID,
      EMAIL_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAIL_CONFIG.PUBLIC_KEY,
    );
    return result;
  } catch (error) {
    console.error("Email send failed:", error);
    // Fallback or rethrow
    throw error;
  }
};
