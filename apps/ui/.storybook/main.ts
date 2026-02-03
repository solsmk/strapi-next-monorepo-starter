import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

import { defineMain } from "@storybook/nextjs-vite/node"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineMain({
  framework: "@storybook/nextjs-vite",

  stories: [
    "../src/components/ui/**/*.stories.@(ts|tsx)",
    "../src/components/typography/**/*.stories.@(ts|tsx)",
    "../src/components/elementary/**/*.stories.@(ts|tsx)",
    "../src/components/page-builder/**/*.stories.@(ts|tsx)",
  ],

  addons: ["@storybook/addon-themes", "@storybook/addon-mcp"],

  staticDirs: ["../public"],

  async viteFinal(config) {
    config.resolve ??= {}
    config.resolve.alias ??= {}

    const mocksDir = join(__dirname, "mocks")

    // Alias modules that crash outside of Next.js runtime
    Object.assign(config.resolve.alias, {
      "@/env.mjs": join(mocksDir, "env.ts"),
      plaiceholder: join(mocksDir, "plaiceholder.ts"),
      "server-only": join(mocksDir, "server-only.ts"),
    })

    return config
  },
})
