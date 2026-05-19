// Cloudflare Workers entrypoint — routes /api/lead to the existing Pages-style
// handler and falls back to static assets (env.ASSETS) for everything else.
//
// Keeps `functions/api/lead.js` untouched (DO-NOT-TOUCH zone). We only re-shape
// the call signature so it can be invoked from a Workers fetch handler.

import { onRequestPost, onRequestOptions } from "../functions/api/lead.js";

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/api/lead") {
      if (request.method === "OPTIONS") {
        return onRequestOptions({ env });
      }
      if (request.method === "POST") {
        return onRequestPost({ request, env });
      }
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "POST, OPTIONS" },
      });
    }

    return env.ASSETS.fetch(request);
  },
};
