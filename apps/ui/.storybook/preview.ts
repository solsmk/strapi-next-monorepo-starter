import { definePreview } from "@storybook/nextjs-vite"
import React from "react"

import "../src/styles/globals.css"

export default definePreview({
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    // Padding wrapper for visual breathing room
    (Story) => {
      return React.createElement(
        "div",
        { style: { padding: "1.5rem" } },
        React.createElement(Story)
      )
    },
  ],
})
