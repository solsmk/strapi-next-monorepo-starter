import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"

const meta = {
  title: "UI/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: { type: "single" },
  render: () => (
    <Accordion type="single" collapsible style={{ maxWidth: 450 }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It uses CSS animations for smooth open and close transitions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const Multiple: Story = {
  args: { type: "multiple" },
  render: () => (
    <Accordion type="multiple" style={{ maxWidth: 450 }}>
      <AccordionItem value="item-1">
        <AccordionTrigger>First section</AccordionTrigger>
        <AccordionContent>Content for the first section.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second section</AccordionTrigger>
        <AccordionContent>Content for the second section.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third section</AccordionTrigger>
        <AccordionContent>Content for the third section.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}

export const DefaultOpen: Story = {
  args: { type: "single" },
  render: () => (
    <Accordion
      type="single"
      defaultValue="item-2"
      collapsible
      style={{ maxWidth: 450 }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>First section</AccordionTrigger>
        <AccordionContent>Content for the first section.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second section (open by default)</AccordionTrigger>
        <AccordionContent>This section is open by default.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third section</AccordionTrigger>
        <AccordionContent>Content for the third section.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
}
