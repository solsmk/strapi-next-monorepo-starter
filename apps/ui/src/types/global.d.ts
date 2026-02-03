// Use type safe message keys with `next-intl`
type Messages = typeof import("../../locales/en.json")

declare module "next-intl" {
  interface AppConfig {
    Messages: Messages
  }
}

export {}
