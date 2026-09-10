import { llmsTxt, plainTextResponse } from "@/lib/llms"

export function GET() {
  return plainTextResponse(llmsTxt())
}
