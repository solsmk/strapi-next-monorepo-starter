import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Card, CardContent } from "./card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel"

const meta = {
  title: "UI/Carousel",
  component: Carousel,
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "0 3rem" }}>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent
                  style={{
                    display: "flex",
                    aspectRatio: "16/9",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.5rem",
                  }}
                >
                  <span style={{ fontSize: "2rem", fontWeight: 600 }}>
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "3rem 0" }}>
      <Carousel orientation="vertical">
        <CarouselContent style={{ height: 200 }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent
                  style={{
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.5rem",
                  }}
                >
                  <span style={{ fontSize: "2rem", fontWeight: 600 }}>
                    {index + 1}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ),
}
