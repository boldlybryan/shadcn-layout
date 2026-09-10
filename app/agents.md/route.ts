import { agentsMd, plainTextResponse } from "@/lib/llms"

export function GET() {
  return plainTextResponse(agentsMd())
}
