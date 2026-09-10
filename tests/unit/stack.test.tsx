import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { Center } from "@/registry/new-york/ui/center"
import { Stack } from "@/registry/new-york/ui/stack"

describe("Stack", () => {
  it("sets tokenized --space and stretch align", () => {
    const { getByTestId } = render(
      <Stack data-testid="stack" space="8">
        <span>a</span>
      </Stack>
    )
    const node = getByTestId("stack")
    expect(node).toHaveClass("layout-stack")
    expect(node.style.getPropertyValue("--space")).toBe(
      "calc(var(--spacing, 0.25rem) * 4)".replace("4", "8")
    )
    expect(node.style.getPropertyValue("--align")).toBe("stretch")
  })

  it("sets data-split for splitAfter", () => {
    const { getByTestId } = render(
      <Stack data-testid="stack" splitAfter={1}>
        <span>a</span>
        <span>b</span>
      </Stack>
    )
    expect(getByTestId("stack")).toHaveAttribute("data-split", "1")
  })

  it("renders as a form", () => {
    const { container } = render(
      <Stack as="form" space="4">
        <input name="q" />
      </Stack>
    )
    expect(container.querySelector("form.layout-stack")).not.toBeNull()
  })

  it("merges onto a child with asChild", () => {
    const { getByTestId } = render(
      <Stack asChild space="2">
        <form data-testid="form" />
      </Stack>
    )
    const form = getByTestId("form")
    expect(form.tagName).toBe("FORM")
    expect(form).toHaveClass("layout-stack")
    expect(form.style.getPropertyValue("--space")).toBe(
      "calc(var(--spacing, 0.25rem) * 2)"
    )
  })
})

describe("Center", () => {
  it("defaults gutters to 0", () => {
    const { getByTestId } = render(
      <Center data-testid="center">
        <p>copy</p>
      </Center>
    )
    expect(getByTestId("center").style.getPropertyValue("--gutters")).toBe(
      "calc(var(--spacing, 0.25rem) * 0)"
    )
  })
})
