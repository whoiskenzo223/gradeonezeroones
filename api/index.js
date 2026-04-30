// runthis lol mark
export const config = { runtime: "edge" };

const TARGET = (process.env.TARGET_DOMAIN || "").replace(/\/$/, "");

if (!TARGET) {
  throw new Error("Missing TARGET_DOMAIN environment variable");
}

const EXCLUDED_HEADERS = new Set([
  "host",
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "forwarded",
  "x-forwarded-host",
  "x-forwarded-proto",
  "x-forwarded-port",
]);

export default async function handler(request) {
  try {
    const { method, url, headers: reqHeaders, body } = request;
    const { pathname, search } = new URL(url);
    const destination = TARGET + pathname + search;

    const forwardHeaders = new Headers();
    let clientIp = null;

    for (const [key, value] of reqHeaders) {
      if (EXCLUDED_HEADERS.has(key)) continue;
      if (key.startsWith("x-vercel-")) continue;
      if (key === "x-real-ip" || key === "x-forwarded-for") {
        clientIp = value;
        continue;
      }
      forwardHeaders.set(key, value);
    }

    if (clientIp) {
      forwardHeaders.set("x-forwarded-for", clientIp);
    }

    const isBodyAllowed = method !== "GET" && method !== "HEAD";

    const fetchOptions = {
      method,
      headers: forwardHeaders,
      body: isBodyAllowed ? body : undefined,
      duplex: "half",
      redirect: "manual",
    };

    return await fetch(destination, fetchOptions);
  } catch (err) {
    console.error("Proxy error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
