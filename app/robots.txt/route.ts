export function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /fixtures

# https://llmstxt.org
# /llms.txt — short contract
# /llms-full.txt — contract plus few-shots
# /agents.md — drop-in for consuming apps
`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  )
}
