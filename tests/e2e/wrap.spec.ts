import { expect, test } from "@playwright/test"

function sameRow(
  a: { y: number; height: number },
  b: { y: number; height: number }
) {
  return Math.abs(a.y - b.y) < 4
}

test("Aside stays in a row when the pane is wide", async ({ page }) => {
  await page.goto("/fixtures")
  const side = await page.getByTestId("aside-wide-side").boundingBox()
  const content = await page.getByTestId("aside-wide-content").boundingBox()
  expect(side).toBeTruthy()
  expect(content).toBeTruthy()
  expect(sameRow(side!, content!)).toBe(true)
})

test("Aside wraps when the pane would drop below contentMin", async ({ page }) => {
  await page.goto("/fixtures")
  const side = await page.getByTestId("aside-narrow-side").boundingBox()
  const content = await page.getByTestId("aside-narrow-content").boundingBox()
  expect(side).toBeTruthy()
  expect(content).toBeTruthy()
  expect(content!.y).toBeGreaterThan(side!.y + side!.height - 2)
})

test("Switcher is a row above threshold and a column below it", async ({ page }) => {
  await page.goto("/fixtures")
  const wide = page.getByTestId("switcher-wide").locator(".layout-switcher > *")
  const narrow = page.getByTestId("switcher-narrow").locator(".layout-switcher > *")

  const wideBoxes = await wide.all()
  const wideA = await wideBoxes[0]!.boundingBox()
  const wideC = await wideBoxes[2]!.boundingBox()
  expect(sameRow(wideA!, wideC!)).toBe(true)

  const narrowBoxes = await narrow.all()
  const narrowA = await narrowBoxes[0]!.boundingBox()
  const narrowB = await narrowBoxes[1]!.boundingBox()
  expect(narrowB!.y).toBeGreaterThan(narrowA!.y + narrowA!.height - 2)
})

test("Grid does not overflow a container narrower than min", async ({ page }) => {
  await page.goto("/fixtures")
  const overflow = await page.getByTestId("grid-narrow").evaluate((el) => {
    return el.scrollWidth - el.clientWidth
  })
  expect(overflow).toBeLessThanOrEqual(1)
})

test("Cover keeps a minimum gap when it is not extra-tall", async ({ page }) => {
  await page.goto("/fixtures")
  const header = await page.getByTestId("cover-header").boundingBox()
  const child = await page.getByTestId("cover-child").boundingBox()
  expect(header).toBeTruthy()
  expect(child).toBeTruthy()
  const gap = child!.y - (header!.y + header!.height)
  expect(gap).toBeGreaterThanOrEqual(15)
})
