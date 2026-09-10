import { llmsFullTxt, plainTextResponse } from "@/lib/llms"

export function GET() {
  return plainTextResponse(llmsFullTxt())
}
