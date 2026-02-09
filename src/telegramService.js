// Configuration placeholders - USER MUST FILL THESE
export const TELEGRAM_CONFIG = {
  BOT_TOKEN: "YOUR_BOT_TOKEN", // Example: '123456789:AbCdeWg...'
  CHAT_ID: "YOUR_CHAT_ID", // Example: '987654321'
};

export const sendTelegramMessage = async (message) => {
  if (
    TELEGRAM_CONFIG.BOT_TOKEN === "YOUR_BOT_TOKEN" ||
    TELEGRAM_CONFIG.CHAT_ID === "YOUR_CHAT_ID"
  ) {
    console.warn("Telegram not configured. Message not sent:", message);
    return;
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_CONFIG.BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to send Telegram message:", error);
  }
};
