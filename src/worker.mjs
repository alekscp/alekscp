const AI_CRAWLER_PATTERNS = [
  /GPTBot/i,
  /OAI-SearchBot/i,
  /ChatGPT-User/i,
  /ClaudeBot/i,
  /Claude-SearchBot/i,
  /Claude-User/i,
  /PerplexityBot/i,
  /Google-Extended/i,
  /CCBot/i,
];

function withTextCharset(pathname, headers) {
  if (pathname.endsWith(".md")) {
    headers.set("Content-Type", "text/markdown; charset=utf-8");
  } else if (pathname.endsWith(".txt")) {
    headers.set("Content-Type", "text/plain; charset=utf-8");
  }
}

function withSecurityHeaders(response, pathname) {
  const headers = new Headers(response.headers);
  if (response.ok) {
    withTextCharset(pathname, headers);
  }
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  headers.set("X-Frame-Options", "DENY");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const userAgent = request.headers.get("user-agent") || "";

    if (url.hostname === "www.alekscp.com") {
      url.hostname = "alekscp.com";
      return Response.redirect(url.toString(), 301);
    }

    if (AI_CRAWLER_PATTERNS.some((pattern) => pattern.test(userAgent))) {
      console.log(JSON.stringify({
        event: "ai_crawler_request",
        path: url.pathname,
        userAgent,
      }));
    }

    const response = await env.ASSETS.fetch(request);
    return withSecurityHeaders(response, url.pathname);
  },
};
