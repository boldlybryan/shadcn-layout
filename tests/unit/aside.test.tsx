import { render } from "@testing-library/react"
import { afterEach, describe, expect, it, vi } from "vitest"

import { Aside } from "@/registry/new-york/ui/aside"
import { Cover } from "@/registry/new-york/ui/cover"

afterEach(() => {
  vi.restoreAllMocks()
})

describe("Aside", () => {
  it("tokenizes sideWidth keys", () => {
    const { getByTestId } = render(
      <Aside data-testid="aside" sideWidth="72" contentMin="50%">
        <Aside.Side>s</Aside.Side>
        <Aside.Content>c</Aside.Content>
      </Aside>
    )
    expect(getByTestId("aside").style.getPropertyValue("--side-width")).toBe(
      "calc(var(--spacing, 0.25rem) * 72)"
    )
    expect(getByTestId("aside").style.getPropertyValue("--content-min")).toBe(
      "50%"
    )
  })

  it("renders Side as nav", () => {
    const { container } = render(
      <Aside>
        <Aside.Side as="nav">s</Aside.Side>
        <Aside.Content>c</Aside.Content>
      </Aside>
    )
    expect(container.querySelector('nav[data-slot="aside-side"]')).not.toBeNull()
  })

  it("warns when slots are missing", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
    render(<Aside>bare</Aside>)
    expect(warn).toHaveBeenCalled()
    expect(String(warn.mock.calls[0]?.[0])).toMatch(/Aside\.Side/)
  })
})

describe("Cover", () => {
  it("warns without Cover.Child", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {})
    render(<Cover>bare</Cover>)
    expect(warn).toHaveBeenCalled()
    expect(String(warn.mock.calls[0]?.[0])).toMatch(/Cover\.Child/)
  })
})
