"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", temperature_moyenne: 5, temperature_max: 7, temperature_min: 3 },
    { month: "February", temperature_moyenne: 6, temperature_max: 8, temperature_min: 3 },
    { month: "March", temperature_moyenne: 9, temperature_max: 12, temperature_min: 6 },
    { month: "April", temperature_moyenne: 12, temperature_max: 16, temperature_min: 8 },
    { month: "May", temperature_moyenne: 16, temperature_max: 20, temperature_min: 12 },
    { month: "June", temperature_moyenne: 19, temperature_max: 23, temperature_min: 15 },
    { month: "July", temperature_moyenne: 22, temperature_max: 26, temperature_min: 18 },
    { month: "August", temperature_moyenne: 21, temperature_max: 25, temperature_min: 17 },
    { month: "September", temperature_moyenne: 18, temperature_max: 22, temperature_min: 14 },
    { month: "October", temperature_moyenne: 14, temperature_max: 17, temperature_min: 11 },
    { month: "November", temperature_moyenne: 9, temperature_max: 11, temperature_min: 6 },
    { month: "December", temperature_moyenne: 6, temperature_max: 8, temperature_min: 3 }
];

const chartConfig = {
  temperature_moyenne: {
    label: "Temp Moyenne",
    color: "hsl(var(--chart-1))",
  },
  temperature_max: {
    label: "Temp Max",
    color: "hsl(var(--chart-2))",
  },
  temperature_min: {
    label: "Temp Min",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Graphique des Températures</CardTitle>
        <CardDescription>
          Températures moyennes, maximales et minimales à Paris pour l'année 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Area
              dataKey="temperature_moyenne"
              type="natural"
              fill="hsl(var(--chart-1))"
              fillOpacity={0.1}
              stroke="hsl(var(--chart-1))"
              stackId="a"
            />
            <Area
              dataKey="temperature_max"
              type="natural"
              fill="hsl(var(--chart-2))"
              fillOpacity={0.4}
              stroke="hsl(var(--chart-2))"
              stackId="a"
            />
            <Area
              dataKey="temperature_min"
              type="natural"
              fill="hsl(var(--chart-3))"
              fillOpacity={0.4}
              stroke="hsl(var(--chart-3))"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Températures <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - Décember 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
