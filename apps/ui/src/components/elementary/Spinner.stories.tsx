import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Spinner } from "./Spinner"

const meta = {
  title: "Elementary/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    borderColorClass: {
      control: "select",
      options: ["border-white", "border-black", "border-blue-500", "border-red-500"],
    },
    borderWidthClass: {
      control: "select",
      options: ["border", "border-2", "border-4"],
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ backgroundColor: "#1a1a1a", padding: "2rem", borderRadius: 8 }}>
      <Spinner className="h-6 w-6" />
    </div>
  ),
}

export const CustomColor: Story = {
  args: {
    borderColorClass: "border-blue-500",
    className: "h-6 w-6",
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Spinner borderColorClass="border-black" className="h-4 w-4" />
      <Spinner borderColorClass="border-black" className="h-6 w-6" />
      <Spinner borderColorClass="border-black" borderWidthClass="border-2" className="h-8 w-8" />
      <Spinner borderColorClass="border-black" borderWidthClass="border-4" className="h-12 w-12" />
    </div>
  ),
}
