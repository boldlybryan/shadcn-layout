import { describe, expect, it } from "vitest"

import {
  isSpacing,
  toLength,
  toMeasure,
  toSpace,
} from "@/registry/new-york/ui/layout"

describe("toSpace", () => {
  it("maps a Tailwind key to the spacing formula", () => {
    expect(toSpace("4")).toBe("calc(var(--spacing, 0.25rem) * 4)")
    expect(toSpace("0.5")).toBe("calc(var(--spacing, 0.25rem) * 0.5)")
    expect(toSpace("7")).toBe("calc(var(--spacing, 0.25rem) * 7)")
  })
})

describe("toLength", () => {
  it("tokenizes spacing keys", () => {
    expect(toLength("72")).toBe("calc(var(--spacing, 0.25rem) * 72)")
  })

  it("passes CSS lengths through", () => {
    expect(toLength("20rem")).toBe("20rem")
    expect(toLength("50%")).toBe("50%")
    expect(toLength("100dvh")).toBe("100dvh")
  })
})

describe("isSpacing", () => {
  it("accepts the default scale including halves", () => {
    expect(isSpacing("4")).toBe(true)
    expect(isSpacing("0.5")).toBe(true)
    expect(isSpacing("96")).toBe(true)
    expect(isSpacing("20rem")).toBe(false)
    expect(isSpacing("50%")).toBe(false)
  })
})

describe("toMeasure", () => {
  it("maps named measures and passes CSS through", () => {
    expect(toMeasure("prose")).toBe("65ch")
    expect(toMeasure("3xl")).toBe("48rem")
    expect(toMeasure("40rem")).toBe("40rem")
  })
})
