// Vercel Serverless Function — POST /api/lead
// Place at: api/lead.js (Vercel auto-routes /api/* from this folder)
// Env vars (set in Vercel dashboard → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN
//   TELEGRAM_CHAT_ID
//   ALLOWED_ORIGIN (optional)

const escapeHtml = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export default async function handler(req, res) {
  const origin = process.env.ALLOWED_ORIGIN || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST")
    return res.status(405).json({ success: false, error: "Method not allowed" });

  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return res.status(500).json({ success: false, error: "Server not configured" });
  }

  const lead = req.body || {};
  const name = escapeHtml(lead.name);
  const phone = escapeHtml(lead.phone);
  const type = escapeHtml(lead.type);
  const time = escapeHtml(lead.time);
  const power = escapeHtml(lead.power);
  const page = escapeHtml(lead.page);
  const ts = escapeHtml(lead.ts);

  if (!name || !phone) {
    return res.status(400).json({ success: false, error: "Missing name or phone" });
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
      return res
        .status(502)
        .json({ success: false, error: tgData.description || "Telegram error" });
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: "Network error" });
  }
}
