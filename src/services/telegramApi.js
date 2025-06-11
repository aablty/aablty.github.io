const API_URL = import.meta.env.VITE_API_URL;
const chatId = 6768265421;

export async function sendTelegramMessage(message) {
  const response = await fetch(`${API_URL}/send-message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ chatId, message }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to send message");
  }

  return response.json();
}
