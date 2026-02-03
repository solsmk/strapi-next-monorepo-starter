import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Heading } from "./Heading"

const meta = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "heading1",
        "heading2",
        "heading3",
        "heading4",
        "heading5",
        "heading6",
      ],
    },
    textColor: {
      control: "select",
      options: ["black", "white"],
    },
    fontWeight: {
      control: "select",
      options: [
        "black",
        "extraBold",
        "bold",
        "semiBold",
        "medium",
        "normal",
        "light",
        "extraLight",
        "thin",
      ],
    },
    tag: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: "Hello World" },
}

export const AllVariants: Story = {
  args: { children: "Heading" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Heading variant="heading1" tag="h1">
        Heading 1
      </Heading>
      <Heading variant="heading2" tag="h2">
        Heading 2
      </Heading>
      <Heading variant="heading3" tag="h3">
        Heading 3
      </Heading>
      <Heading variant="heading4" tag="h4">
        Heading 4
      </Heading>
      <Heading variant="heading5" tag="h5">
        Heading 5
      </Heading>
      <Heading variant="heading6" tag="h6">
        Heading 6
      </Heading>
    </div>
  ),
}

export const FontWeights: Story = {
  args: { children: "Heading" },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <Heading fontWeight="black">Black</Heading>
      <Heading fontWeight="extraBold">Extra Bold</Heading>
      <Heading fontWeight="bold">Bold</Heading>
      <Heading fontWeight="semiBold">Semi Bold</Heading>
      <Heading fontWeight="medium">Medium</Heading>
      <Heading fontWeight="normal">Normal</Heading>
      <Heading fontWeight="light">Light</Heading>
      <Heading fontWeight="extraLight">Extra Light</Heading>
      <Heading fontWeight="thin">Thin</Heading>
    </div>
  ),
}
