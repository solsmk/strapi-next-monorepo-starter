import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Container } from "./Container"

const meta = {
  title: "Elementary/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    hideDefaultPadding: { control: "boolean" },
  },
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div style={{ backgroundColor: "#e5e7eb", padding: "2rem", borderRadius: 8 }}>
        Content inside a Container with default padding (max-w-[1296px] px-6).
      </div>
    ),
  },
}

export const NoPadding: Story = {
  args: {
    hideDefaultPadding: true,
    children: (
      <div style={{ backgroundColor: "#e5e7eb", padding: "2rem", borderRadius: 8 }}>
        Content inside a Container with hideDefaultPadding (max-w-screen-default, no px).
      </div>
    ),
  },
}
