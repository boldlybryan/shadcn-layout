"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { GITHUB, nav } from "@/lib/docs"
import { cn } from "@/lib/utils"
import { Aside } from "@/registry/new-york/ui/aside"
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Stack } from "@/registry/new-york/ui/stack"

export function DocsShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 border-b bg-background/90 backdrop-blur">
        <Cluster justify="between" align="center" space="4" className="h-14 px-4 md:px-6">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            shadcn-layout
          </Link>
          <Cluster space="4">
            <a
              href="/llms.txt"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              llms.txt
            </a>
            <a
              href={GITHUB}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          </Cluster>
        </Cluster>
      </header>
      <Aside sideWidth="14rem" space="0">
        <Aside.Side className="border-b md:border-b-0 md:border-r">
          <nav className="p-4">
            <Stack space="6">
              {nav.map((group) => (
                <Stack key={group.title} space="2">
                  <p className="px-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {group.title}
                  </p>
                  <Stack space="0">
                    {group.items.map((item) => {
                      const active = pathname === item.href
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "rounded-md px-2 py-1.5 text-sm",
                            active
                              ? "bg-accent font-medium text-accent-foreground"
                              : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                          )}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </nav>
        </Aside.Side>
        <Aside.Content>
          <div className="min-w-0 px-4 py-8 md:px-8 md:py-10">{children}</div>
        </Aside.Content>
      </Aside>
    </div>
  )
}
