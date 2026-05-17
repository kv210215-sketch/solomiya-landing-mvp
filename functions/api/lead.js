// Cloudflare Pages Function — POST /api/lead
// Place this file at: functions/api/lead.js
// Env vars required (set in Cloudflare dashboard → Settings → Environment variables):
//   TELEGRAM_BOT_TOKEN  — from @BotFather
//   TELEGRAM_CHAT_ID    — target chat / channel id
//   ALLOWED_ORIGIN      — (optional) e.g. https://solomiyaenergy.com — restricts CORS
//
// Cloudflare auto-routes this to /api/lead. No build step.

const escapeHtml = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

export async function onRequestOptions({ env }) {
  return new Response(null, { status: 204, headers: corsHeaders(env) });
}

export async function onRequestPost({ request, env }) {
  const headers = { "Content-Type": "application/json", ...corsHeaders(env) };

  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return new Response(
      JSON.stringify({ success: false, error: "Server not configured" }),
      { status: 500, headers }
    );
  }

  let lead;
  try {
    lead = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false, error: "Invalid JSON" }), {
      status: 400,
      headers,
    });
  }

  const name = escapeHtml(lead.name);
  const phone = escapeHtml(lead.phone);
  const type = escapeHtml(lead.type);
  const time = escapeHtml(lead.time);
  const power = escapeHtml(lead.power);
  const page = escapeHtml(lead.page);
  const ts = escapeHtml(lead.ts);

  if (!name || !phone) {
    return new Response(
      JSON.stringify({ success: false, error: "Missing name or phone" }),
      { status: 400, headers }
    );
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

  const tgRes = await fetch(
    `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    }
  );

  const tgData = await tgRes.json().catch(() => ({}));

  if (!tgRes.ok || !tgData.ok) {
    console.error("Telegram error:", tgData);
    return new Response(
      JSON.stringify({ success: false, error: tgData.description || "Telegram error" }),
      { status: 502, headers }
    );
  }

  return new Response(JSON.stringify({ success: true }), { status: 200, headers });
}

function corsHeaders(env) {
  const origin = env.ALLOWED_ORIGIN || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}
