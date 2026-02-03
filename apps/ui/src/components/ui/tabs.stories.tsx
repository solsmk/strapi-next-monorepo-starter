import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs"

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" style={{ maxWidth: 400 }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p style={{ padding: "1rem 0" }}>
          Make changes to your account here.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p style={{ padding: "1rem 0" }}>
          Change your password here.
        </p>
      </TabsContent>
      <TabsContent value="settings">
        <p style={{ padding: "1rem 0" }}>
          Adjust your settings here.
        </p>
      </TabsContent>
    </Tabs>
  ),
}

export const DefaultSelected: Story = {
  render: () => (
    <Tabs defaultValue="settings" style={{ maxWidth: 400 }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p style={{ padding: "1rem 0" }}>Account tab content.</p>
      </TabsContent>
      <TabsContent value="password">
        <p style={{ padding: "1rem 0" }}>Password tab content.</p>
      </TabsContent>
      <TabsContent value="settings">
        <p style={{ padding: "1rem 0" }}>
          Settings tab is selected by default.
        </p>
      </TabsContent>
    </Tabs>
  ),
}
