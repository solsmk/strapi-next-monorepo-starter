import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Skeleton } from "./skeleton"

const meta = {
  title: "UI/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    style: { width: 200, height: 20 },
  },
}

export const CardLayout: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        maxWidth: 350,
      }}
    >
      <Skeleton style={{ height: 200, width: "100%", borderRadius: 12 }} />
      <Skeleton style={{ height: 20, width: "80%" }} />
      <Skeleton style={{ height: 16, width: "60%" }} />
    </div>
  ),
}

export const TextLines: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        maxWidth: 400,
      }}
    >
      <Skeleton style={{ height: 16, width: "100%" }} />
      <Skeleton style={{ height: 16, width: "90%" }} />
      <Skeleton style={{ height: 16, width: "75%" }} />
      <Skeleton style={{ height: 16, width: "85%" }} />
    </div>
  ),
}
