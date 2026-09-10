"use client"

import { useState } from "react"

import { DocsCode } from "@/components/docs/code-block"
import {
  type PackageManagerId,
  installCmd,
  installedFiles,
  packageManagers,
} from "@/lib/docs"
import { Button } from "@/registry/new-york/ui/button"
import { Cluster } from "@/registry/new-york/ui/cluster"
import { Stack } from "@/registry/new-york/ui/stack"

export function Install({
  item,
  full = false,
}: {
  item: string
  full?: boolean
}) {
  const [pm, setPm] = useState<PackageManagerId>("pnpm")
  const files = installedFiles(item)

  return (
    <Stack space="4">
      {full ? (
        <p className="text-sm text-muted-foreground">
          Requires an existing shadcn/ui app (<code>components.json</code>). This
          copies source into your <code>ui</code> folder. It is not{" "}
          <code>npm install shadcn-layout</code>.
        </p>
      ) : null}
      <Cluster space="2">
        {packageManagers.map((manager) => (
          <Button
            key={manager.id}
            type="button"
            size="sm"
            variant={pm === manager.id ? "default" : "outline"}
            onClick={() => setPm(manager.id)}
          >
            {manager.label}
          </Button>
        ))}
      </Cluster>
      <DocsCode>{installCmd(item, pm)}</DocsCode>
      {full && item === "layouts" ? (
        <p className="text-sm text-muted-foreground">
          One primitive: <code>{installCmd("stack", pm)}</code>. Prefer the kit
          unless you only need one.
        </p>
      ) : null}
      <p className="text-sm text-muted-foreground">
        Files land next to your <code>ui</code> alias (usually{" "}
        <code>components/ui</code>): <code>{files.join(", ")}</code>. Each
        component imports its own CSS — do not add it to{" "}
        <code>globals.css</code>.
      </p>
    </Stack>
  )
}
