"use client"

import { FileQuestion, Inbox } from "lucide-react"

import { LogoMark } from "@/components/showcase/widgets"
import { Aside } from "@/registry/new-york/ui/aside"
import { Button } from "@/registry/new-york/ui/button"
import { Card, CardContent } from "@/registry/new-york/ui/card"
import { Center } from "@/registry/new-york/ui/center"
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Cover } from "@/registry/new-york/ui/cover"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Stack } from "@/registry/new-york/ui/stack"
import { Switcher } from "@/registry/new-york/ui/switcher"

export function SignInScene() {
  return (
    <Cover minHeight="28rem" space="6" className="bg-muted/20">
      <Cluster justify="between" as="header">
        <LogoMark name="Lumen" />
        <Button variant="ghost" size="sm">
          Help
        </Button>
      </Cluster>
      <Cover.Child>
        <Center measure="sm" gutters="0" intrinsic>
          <Card className="w-full py-0 shadow-none">
            <CardContent className="p-6">
              <Stack as="form" space="6" onSubmit={(event) => event.preventDefault()}>
                <Stack space="2">
                  <h3 className="text-lg font-semibold tracking-tight">Sign in</h3>
                  <p className="text-sm text-muted-foreground">
                    Cover centers the form. Center caps the measure.
                  </p>
                </Stack>
                <Stack space="4">
                  <Stack space="2">
                    <Label htmlFor="showcase-email">Work email</Label>
                    <Input id="showcase-email" type="email" defaultValue="maya@northwind.dev" />
                  </Stack>
                  <Stack space="2">
                    <Label htmlFor="showcase-password">Password</Label>
                    <Input id="showcase-password" type="password" defaultValue="password" />
                  </Stack>
                </Stack>
                <Button type="submit" className="w-full">
                  Continue
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Center>
      </Cover.Child>
      <p className="text-center text-xs text-muted-foreground">
        SSO is on for Northwind. Password is a fallback.
      </p>
    </Cover>
  )
}

export function EmptyScene() {
  return (
    <Cover minHeight="22rem" space="6">
      <Cover.Child>
        <Center measure="sm" gutters="0" intrinsic>
          <Stack space="4">
            <Inbox className="size-8 text-muted-foreground" />
            <Stack space="2">
              <h3 className="text-center text-lg font-semibold tracking-tight">
                No boards yet
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                Empty states are Cover. The message sits in Cover.Child; the
                action is just another Stack item.
              </p>
            </Stack>
            <Cluster justify="center" space="2">
              <Button size="sm">New board</Button>
              <Button variant="outline" size="sm">
                Browse templates
              </Button>
            </Cluster>
          </Stack>
        </Center>
      </Cover.Child>
    </Cover>
  )
}

export function NotFoundScene() {
  return (
    <Cover minHeight="22rem" space="6" className="bg-muted/20">
      <Cluster justify="between" as="header">
        <LogoMark name="Lumen" />
        <Button variant="outline" size="sm">
          Status
        </Button>
      </Cluster>
      <Cover.Child>
        <Center measure="sm" gutters="0" intrinsic>
          <Stack space="4">
            <FileQuestion className="size-8 text-muted-foreground" />
            <Stack space="2">
              <p className="text-center text-xs font-medium uppercase tracking-wide text-muted-foreground">
                404
              </p>
              <h3 className="text-center text-2xl font-semibold tracking-tight">
                That board is gone
              </h3>
              <p className="text-center text-sm text-muted-foreground">
                It was moved, renamed, or you do not have access. Cover still
                holds the chrome at the edges.
              </p>
            </Stack>
            <Cluster justify="center" space="2">
              <Button size="sm">Back to overview</Button>
              <Button variant="outline" size="sm">
                Home
              </Button>
            </Cluster>
          </Stack>
        </Center>
      </Cover.Child>
    </Cover>
  )
}

export function DialogScene() {
  return (
    <Cover minHeight="22rem" space="6" className="bg-muted/40">
      <Cover.Child>
        <Center measure="md" gutters="4">
          <Card className="py-0 shadow-sm">
            <CardContent className="p-6">
              <Stack space="4">
                <Stack space="2">
                  <h3 className="text-lg font-semibold tracking-tight">Delete board</h3>
                  <p className="text-sm text-muted-foreground">
                    “Activation” and its saved views will be removed. This does
                    not touch the warehouse.
                  </p>
                </Stack>
                <Cluster justify="end" space="2">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive">Delete</Button>
                </Cluster>
              </Stack>
            </CardContent>
          </Card>
        </Center>
      </Cover.Child>
    </Cover>
  )
}

export function BlogScene() {
  return (
    <div className="p-6">
      <Aside side="end" sideWidth="12rem" space="8" contentMin="60%">
        <Aside.Side>
          <Stack space="3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              On this page
            </p>
            <Stack space="2">
              {["The cut", "What changed", "What did not"].map((item) => (
                <span key={item} className="text-sm text-muted-foreground">
                  {item}
                </span>
              ))}
            </Stack>
          </Stack>
        </Aside.Side>
        <Aside.Content>
          <Center measure="prose" gutters="0">
            <Stack as="article" space="4">
              <Stack space="2">
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Changelog · Sep 2026
                </p>
                <h3 className="text-2xl font-semibold tracking-tight">
                  How we cut time-to-insight in half
                </h3>
              </Stack>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Center keeps the article on a reading measure. Aside parks the
                table of contents in a complementary column that wraps when the
                pane would otherwise starve.
              </p>
              <p className="text-sm leading-relaxed">
                The old path was a warehouse UI, a screenshot, and a thread.
                The new path is a board with a stable URL. Same query, same
                filters, no export step.
              </p>
              <p className="text-sm leading-relaxed">
                We did not add a twelfth chart type. We made the existing ones
                inherit the board&apos;s filters, and we stopped asking people
                to name the same metric twice.
              </p>
            </Stack>
          </Center>
        </Aside.Content>
      </Aside>
    </div>
  )
}

export function CheckoutScene() {
  return (
    <div className="p-6">
      <Switcher threshold="36rem" space="8">
        <Stack as="form" space="6" onSubmit={(event) => event.preventDefault()}>
          <Stack space="1">
            <h3 className="text-lg font-semibold tracking-tight">Checkout</h3>
            <p className="text-sm text-muted-foreground">
              Switcher: form and summary sit in a row until they cannot.
            </p>
          </Stack>
          <Stack space="4">
            <Stack space="2">
              <Label htmlFor="card-name">Name on card</Label>
              <Input id="card-name" defaultValue="Maya Chen" />
            </Stack>
            <Stack space="2">
              <Label htmlFor="card-number">Card number</Label>
              <Input id="card-number" defaultValue="4242 4242 4242 4242" />
            </Stack>
            <Switcher threshold="16rem" space="4">
              <Stack space="2">
                <Label htmlFor="card-exp">Expiry</Label>
                <Input id="card-exp" defaultValue="12 / 28" />
              </Stack>
              <Stack space="2">
                <Label htmlFor="card-cvc">CVC</Label>
                <Input id="card-cvc" defaultValue="123" />
              </Stack>
            </Switcher>
          </Stack>
          <Button type="submit">Pay $49</Button>
        </Stack>
        <Card className="py-0 shadow-none">
          <CardContent className="p-5">
            <Stack space="4">
              <p className="text-sm font-medium">Order</p>
              <Stack space="3">
                <Cluster justify="between">
                  <span className="text-sm">Team plan</span>
                  <span className="text-sm">$49.00</span>
                </Cluster>
                <Cluster justify="between">
                  <span className="text-sm text-muted-foreground">Tax</span>
                  <span className="text-sm text-muted-foreground">$0.00</span>
                </Cluster>
                <Cluster justify="between">
                  <span className="text-sm font-medium">Due today</span>
                  <span className="text-sm font-medium">$49.00</span>
                </Cluster>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Switcher>
    </div>
  )
}
