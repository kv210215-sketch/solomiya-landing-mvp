// Netlify Function — POST /.netlify/functions/lead
// Also available at /api/lead via the redirect rule in netlify.toml.
// Place at: netlify/functions/lead.js
// Env vars (set in Netlify dashboard → Site settings → Environment variables):
//   TELEGRAM_BOT_TOKEN
//   TELEGRAM_CHAT_ID
//   ALLOWED_ORIGIN (optional)

const escapeHtml = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

exports.handler = async (event) => {
  const origin = process.env.ALLOWED_ORIGIN || "*";
  const cors = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  if (event.httpMethod === "OPTIONS")
    return { statusCode: 204, headers: cors, body: "" };
  if (event.httpMethod !== "POST")
    return {
      statusCode: 405,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Method not allowed" }),
    };

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return {
      statusCode: 500,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Server not configured" }),
    };
  }

  let lead;
  try {
    lead = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Invalid JSON" }),
    };
  }

  const name = escapeHtml(lead.name);
  const phone = escapeHtml(lead.phone);
  const type = escapeHtml(lead.type);
  const time = escapeHtml(lead.time);
  const power = escapeHtml(lead.power);
  const page = escapeHtml(lead.page);
  const ts = escapeHtml(lead.ts);

  if (!phone) {
    return {
      statusCode: 400,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Missing phone" }),
    };
  }

  const text =
    `🌞 <b>Нова заявка — Solomiya Energy</b>\n\n` +
    `👤 <b>Імʼя:</b> ${name}\n` +
    `📞 <b>Телефон:</b> <a href="tel:${phone.replace(/\s/g, "")}">${phone}</a>\n` +
    `🏠 <b>Тип:</b> ${type}\n` +
    `⏰ <b>Коли передзвонити:</b> ${time}\n` +
    `⚡ <b>Потужність:</b> ${power}\n\n` +
    `🌐 <b>Сторінка:</b> ${page}\n` +
    `🕐 <b>Час:</b> ${ts}`;

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }
    );
    const tgData = await tgRes.json();
    if (!tgRes.ok || !tgData.ok) {
      console.error("Telegram error:", tgData);
      return {
        statusCode: 502,
        headers: { ...cors, "Content-Type": "application/json" },
        body: JSON.stringify({
          success: false,
          error: tgData.description || "Telegram error",
        }),
      };
    }
    return {
      statusCode: 200,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: { ...cors, "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: "Network error" }),
    };
  }
};
