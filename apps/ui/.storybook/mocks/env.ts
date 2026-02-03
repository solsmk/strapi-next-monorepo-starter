/**
 * Mock for @/env.mjs — prevents createEnv() validation from crashing in Storybook.
 * Only the shape matters; values are never hit at runtime in stories.
 */
export const env = {
  // Server
  APP_PUBLIC_URL: "http://localhost:3000",
  STRAPI_URL: "http://localhost:1337",
  STRAPI_REST_READONLY_API_KEY: "mock-readonly-key",
  STRAPI_REST_CUSTOM_API_KEY: undefined,
  NEXT_OUTPUT: undefined,
  WEBPACK_CACHE_TYPE: undefined,
  NEXTAUTH_URL: undefined,
  NEXTAUTH_SECRET: undefined,
  SENTRY_AUTH_TOKEN: undefined,
  SENTRY_ORG: undefined,
  SENTRY_PROJECT: undefined,
  STRAPI_PREVIEW_SECRET: undefined,
  SENTRY_SUPPRESS_GLOBAL_ERROR_HANDLER_FILE_WARNING: undefined,
  RECAPTCHA_SECRET_KEY: undefined,

  // Client
  NEXT_PUBLIC_REVALIDATE: undefined,
  NEXT_PUBLIC_SENTRY_DSN: undefined,
  NEXT_PUBLIC_RECAPTCHA_SITE_KEY: undefined,
  NEXT_PUBLIC_PREVENT_UNUSED_FUNCTIONS_ERROR_LOGS: undefined,

  // Shared
  NODE_ENV: "development" as const,
  APP_ENV: undefined,
}
