export const examples = {
  hero: `import { Button } from "@/components/ui/button"
import { Center, Cluster, Cover, Stack } from "@/components/ui/layouts"

<Cover minHeight="32rem" space="6">
  <Cluster justify="between" as="header" align="center" space="4">
    <span>Lumen</span>
    <Cluster space="3">
      <Cluster as="nav" space="4">
        <a href="#product">Product</a>
        <a href="#pricing">Pricing</a>
      </Cluster>
      <Cluster space="2">
        <Button variant="ghost" size="sm">Sign in</Button>
        <Button size="sm">Start free</Button>
      </Cluster>
    </Cluster>
  </Cluster>
  <Cover.Child>
    <Center measure="3xl" intrinsic>
      <Stack space="6">
        <h1>See why the number moved.</h1>
        <Cluster justify="center" space="3">
          <Button>Start free</Button>
          <Button variant="outline">Book a demo</Button>
        </Cluster>
      </Stack>
    </Center>
  </Cover.Child>
  <Cluster justify="center" space="8">
    <span>Northwind</span>
    <span>Fieldkit</span>
    <span>Harbor</span>
  </Cluster>
</Cover>`,

  features: `import { Card, CardContent } from "@/components/ui/card"
import { Center, Grid, Stack } from "@/components/ui/layouts"

<Center measure="5xl">
  <Stack space="8">
    <Center measure="xl" intrinsic>
      <h2>The board, not the warehouse UI</h2>
    </Center>
    <Grid min="14rem" space="4">
      {features.map((feature) => (
        <Card key={feature.title}>
          <CardContent>
            <Stack space="3">
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Grid>
  </Stack>
</Center>`,

  split: `import { Button } from "@/components/ui/button"
import { Cluster, Grid, Stack, Switcher } from "@/components/ui/layouts"

<Switcher threshold="36rem" space="8">
  <Stack space="4">
    <h2>A metric with a memory</h2>
    <p>Equal panes in a row until the container is narrower than the threshold.</p>
    <Cluster space="3">
      <Button size="sm">Open a board</Button>
      <Button variant="outline" size="sm">Browse templates</Button>
    </Cluster>
  </Stack>
  <Stack space="4">
    <Cluster justify="between">
      <span>Activation</span>
      <span>Last 14 days</span>
    </Cluster>
    <Grid min="6rem" space="3">
      <p>38.4%</p>
      <p>+2.1%</p>
    </Grid>
  </Stack>
</Switcher>`,

  pricing: `import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Center, Cluster, Grid, Stack } from "@/components/ui/layouts"

<Center measure="5xl">
  <Stack space="8">
    <Center measure="lg" intrinsic>
      <h2>Pricing that fits a squad</h2>
    </Center>
    <Grid min="16rem" space="4">
      {plans.map((plan) => (
        <Card key={plan.name}>
          <CardContent>
            <Stack space="6">
              <Cluster justify="between">
                <h3>{plan.name}</h3>
                {plan.featured ? <span>Typical</span> : null}
              </Cluster>
              <p>{plan.price}</p>
              <Button variant={plan.featured ? "default" : "outline"}>
                {plan.cta}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Grid>
  </Stack>
</Center>`,

  stories: `import { Card, CardContent } from "@/components/ui/card"
import { Grid, Stack } from "@/components/ui/layouts"

<Grid min="16rem" space="4">
  {quotes.map((item) => (
    <Card key={item.name}>
      <CardContent>
        <Stack space="4">
          <p>“{item.quote}”</p>
          <Stack space="1">
            <p>{item.name}</p>
            <p>{item.role}</p>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  ))}
</Grid>`,

  footer: `import { Cluster, Grid, Stack } from "@/components/ui/layouts"

<Stack space="8">
  <Grid min="10rem" space="6">
    {columns.map((column) => (
      <Stack key={column.title} space="3">
        <p>{column.title}</p>
        <Stack space="2">
          {column.links.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </Stack>
      </Stack>
    ))}
  </Grid>
  <Cluster justify="between" align="center">
    <span>Lumen</span>
    <p>© 2026 Lumen</p>
  </Cluster>
</Stack>`,

  dashboard: `import { Button } from "@/components/ui/button"
import { Aside, Cluster, Grid, Stack } from "@/components/ui/layouts"

<Stack space="6">
  <Cluster justify="between" as="header" align="center" space="4">
    <Stack space="1">
      <h1>Overview</h1>
      <p>Northwind · last 30 days</p>
    </Stack>
    <Cluster space="2">
      <Button variant="outline" size="sm">Export</Button>
      <Button size="sm">New report</Button>
    </Cluster>
  </Cluster>
  <Grid min="11rem" space="4">
    <Metric label="Activation" value="38.4%" />
    <Metric label="Weekly retained" value="61.2%" />
    <Metric label="Time to insight" value="4.6m" />
    <Metric label="Boards shared" value="128" />
  </Grid>
  <Aside side="end" sideWidth="16rem" contentMin="55%">
    <Aside.Side>{/* activity */}</Aside.Side>
    <Aside.Content>{/* chart */}</Aside.Content>
  </Aside>
</Stack>`,

  settings: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Aside, Cluster, Stack } from "@/components/ui/layouts"

<Stack space="6">
  <Cluster justify="between" as="header" align="center" space="4">
    <h1>Settings</h1>
    <Button size="sm">Save</Button>
  </Cluster>
  <Aside sideWidth="11rem" space="6">
    <Aside.Side>
      <Stack as="nav" space="1">
        <Button variant="secondary" size="sm">General</Button>
        <Button variant="ghost" size="sm">Team</Button>
        <Button variant="ghost" size="sm">Billing</Button>
      </Stack>
    </Aside.Side>
    <Aside.Content>
      <Stack as="form" space="6">
        <Stack space="2">
          <Label htmlFor="org-name">Workspace name</Label>
          <Input id="org-name" />
        </Stack>
        <Cluster justify="end" space="2">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Save</Button>
        </Cluster>
      </Stack>
    </Aside.Content>
  </Aside>
</Stack>`,

  inbox: `import { Button } from "@/components/ui/button"
import { Aside, Cluster, Stack } from "@/components/ui/layouts"

<Aside sideWidth="18rem" space="0" contentMin="45%">
  <Aside.Side>
    <Stack space="0">
      {threads.map((thread) => (
        <button key={thread.id} type="button">
          <Stack space="1">
            <Cluster justify="between">
              <p>{thread.from}</p>
              <span>{thread.time}</span>
            </Cluster>
            <p>{thread.preview}</p>
          </Stack>
        </button>
      ))}
    </Stack>
  </Aside.Side>
  <Aside.Content>
    <Stack space="4">
      <p>{active.body}</p>
      <Cluster justify="end" space="2">
        <Button variant="outline" size="sm">Archive</Button>
        <Button size="sm">Reply</Button>
      </Cluster>
    </Stack>
  </Aside.Content>
</Aside>`,

  templates: `import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cluster, Grid, Stack } from "@/components/ui/layouts"

<Stack space="6">
  <Cluster justify="between" as="header" align="center" space="4">
    <h1>Templates</h1>
    <Button size="sm">New template</Button>
  </Cluster>
  <Cluster space="2">
    {filters.map((item) => (
      <Button
        key={item}
        size="sm"
        variant={filter === item ? "default" : "outline"}
      >
        {item}
      </Button>
    ))}
  </Cluster>
  <Grid min="14rem" space="4">
    {items.map((item) => (
      <Card key={item.name}>
        <CardContent>
          <Stack space="2">
            <Cluster justify="between">
              <p>{item.name}</p>
              <span>{item.kind}</span>
            </Cluster>
          </Stack>
        </CardContent>
      </Card>
    ))}
  </Grid>
</Stack>`,

  board: `import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cluster, Grid, Stack } from "@/components/ui/layouts"

<Stack space="6">
  <Cluster justify="between" as="header">
    <h1>Sprint 42</h1>
    <Button size="sm">Add card</Button>
  </Cluster>
  <Grid min="16rem" space="4">
    {columns.map((column) => (
      <Stack key={column.title} space="3">
        <Cluster justify="between">
          <p>{column.title}</p>
          <span>{column.cards.length}</span>
        </Cluster>
        <Stack space="2">
          {column.cards.map((card) => (
            <Card key={card.title}>
              <CardContent>
                <Stack space="2">
                  <p>{card.title}</p>
                  <p>{card.meta}</p>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    ))}
  </Grid>
</Stack>`,

  team: `import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cluster, Grid, Stack } from "@/components/ui/layouts"

<Stack space="6">
  <Cluster justify="between" as="header" align="center" space="4">
    <h1>Team</h1>
    <Button size="sm">Invite</Button>
  </Cluster>
  <Grid min="14rem" space="4">
    {people.map((person) => (
      <Card key={person.name}>
        <CardContent>
          <Stack space="4">
            <Cluster space="3">
              <Avatar initials={person.initials} />
              <Stack space="1">
                <p>{person.name}</p>
                <p>{person.role}</p>
              </Stack>
            </Cluster>
            <Cluster justify="between">
              <span>{person.team}</span>
              <span>Active</span>
            </Cluster>
          </Stack>
        </CardContent>
      </Card>
    ))}
  </Grid>
</Stack>`,

  billing: `import { Button } from "@/components/ui/button"
import { Cluster, Stack } from "@/components/ui/layouts"

<Stack space="6">
  <Cluster justify="between" as="header" align="center" space="4">
    <h1>Billing</h1>
    <Cluster space="2">
      <Button variant="outline" size="sm">Update card</Button>
      <Button size="sm">Change plan</Button>
    </Cluster>
  </Cluster>
  <Stack space="3">
    {invoices.map((invoice) => (
      <Cluster
        key={invoice.id}
        justify="between"
        align="center"
        space="4"
      >
        <Stack space="1">
          <p>{invoice.id}</p>
          <p>{invoice.date}</p>
        </Stack>
        <Cluster space="3">
          <p>{invoice.amount}</p>
          <span>{invoice.status}</span>
          <Button variant="outline" size="sm">PDF</Button>
        </Cluster>
      </Cluster>
    ))}
  </Stack>
</Stack>`,

  "sign-in": `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Center, Cluster, Cover, Stack } from "@/components/ui/layouts"

<Cover minHeight="28rem" space="6">
  <Cluster justify="between" as="header">
    <span>Lumen</span>
    <Button variant="ghost" size="sm">Help</Button>
  </Cluster>
  <Cover.Child>
    <Center measure="sm" intrinsic>
      <Stack as="form" space="6">
        <h1>Sign in</h1>
        <Stack space="2">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" type="email" />
        </Stack>
        <Stack space="2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </Stack>
        <Button type="submit">Continue</Button>
      </Stack>
    </Center>
  </Cover.Child>
  <p>SSO is on for this workspace.</p>
</Cover>`,

  blog: `import { Aside, Center, Stack } from "@/components/ui/layouts"

<Aside side="end" sideWidth="12rem" space="8" contentMin="60%">
  <Aside.Side>
    <Stack space="3">
      <p>On this page</p>
      <Stack space="2">
        <a href="#cut">The cut</a>
        <a href="#changed">What changed</a>
      </Stack>
    </Stack>
  </Aside.Side>
  <Aside.Content>
    <Center measure="prose">
      <Stack as="article" space="4">
        <h1>How we cut time-to-insight in half</h1>
        <p>Center keeps the article on a reading measure.</p>
      </Stack>
    </Center>
  </Aside.Content>
</Aside>`,

  checkout: `import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Cluster, Stack, Switcher } from "@/components/ui/layouts"

<Switcher threshold="36rem" space="8">
  <Stack as="form" space="6">
    <h1>Checkout</h1>
    <Stack space="2">
      <Label htmlFor="card-name">Name on card</Label>
      <Input id="card-name" />
    </Stack>
    <Switcher threshold="16rem" space="4">
      <Stack space="2">
        <Label htmlFor="card-exp">Expiry</Label>
        <Input id="card-exp" />
      </Stack>
      <Stack space="2">
        <Label htmlFor="card-cvc">CVC</Label>
        <Input id="card-cvc" />
      </Stack>
    </Switcher>
    <Button type="submit">Pay $49</Button>
  </Stack>
  <Stack space="4">
    <p>Order</p>
    <Cluster justify="between">
      <span>Team plan</span>
      <span>$49.00</span>
    </Cluster>
    <Cluster justify="between">
      <span>Due today</span>
      <span>$49.00</span>
    </Cluster>
  </Stack>
</Switcher>`,

  dialog: `import { Button } from "@/components/ui/button"
import { Center, Cluster, Cover, Stack } from "@/components/ui/layouts"

<Cover minHeight="22rem" space="6">
  <Cover.Child>
    <Center measure="md" gutters="4">
      <Stack space="4">
        <Stack space="2">
          <h2>Delete board</h2>
          <p>This does not touch the warehouse.</p>
        </Stack>
        <Cluster justify="end" space="2">
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </Cluster>
      </Stack>
    </Center>
  </Cover.Child>
</Cover>`,

  empty: `import { Button } from "@/components/ui/button"
import { Center, Cluster, Cover, Stack } from "@/components/ui/layouts"

<Cover minHeight="22rem" space="6">
  <Cover.Child>
    <Center measure="sm" intrinsic>
      <Stack space="4">
        <h1>No boards yet</h1>
        <p>The message sits in Cover.Child.</p>
        <Cluster justify="center" space="2">
          <Button size="sm">New board</Button>
          <Button variant="outline" size="sm">Browse templates</Button>
        </Cluster>
      </Stack>
    </Center>
  </Cover.Child>
</Cover>`,

  missing: `import { Button } from "@/components/ui/button"
import { Center, Cluster, Cover, Stack } from "@/components/ui/layouts"

<Cover minHeight="22rem" space="6">
  <Cluster justify="between" as="header">
    <span>Lumen</span>
    <Button variant="outline" size="sm">Status</Button>
  </Cluster>
  <Cover.Child>
    <Center measure="sm" intrinsic>
      <Stack space="4">
        <p>404</p>
        <h1>That board is gone</h1>
        <Cluster justify="center" space="2">
          <Button size="sm">Back to overview</Button>
          <Button variant="outline" size="sm">Home</Button>
        </Cluster>
      </Stack>
    </Center>
  </Cover.Child>
</Cover>`,
} as const
