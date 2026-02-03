import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Paragraph } from "./Paragraph"

const meta = {
  title: "Typography/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["base"],
    },
    textColor: {
      control: "select",
      options: ["black", "white"],
    },
  },
} satisfies Meta<typeof Paragraph>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children:
      "This is a paragraph component used for body text throughout the application.",
  },
}

export const WhiteOnDark: Story = {
  render: () => (
    <div style={{ backgroundColor: "#1a1a1a", padding: "1.5rem", borderRadius: 8 }}>
      <Paragraph textColor="white">
        This paragraph uses white text on a dark background.
      </Paragraph>
    </div>
  ),
}
