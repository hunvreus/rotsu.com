const CANONICAL_HOST = "rotsu.com";
const WWW_HOST = `www.${CANONICAL_HOST}`;

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    const isCanonicalHost = url.hostname === CANONICAL_HOST;
    const isWwwHost = url.hostname === WWW_HOST;

    if (isWwwHost || (isCanonicalHost && url.protocol === "http:")) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
