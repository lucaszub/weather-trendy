"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

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
  { month: "January", precipitation: 55 },
  { month: "February", precipitation: 42 },
  { month: "March", precipitation: 47 },
  { month: "April", precipitation: 53 },
  { month: "May", precipitation: 61 },
  { month: "June", precipitation: 67 },
  { month: "July", precipitation: 73 },
  { month: "August", precipitation: 65 },
  { month: "September", precipitation: 58 },
  { month: "October", precipitation: 50 },
  { month: "November", precipitation: 46 },
  { month: "December", precipitation: 51 },
]

const chartConfig = {
  precipitation: {
    label: "Précipitations",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Graphique des Précipitations</CardTitle>
        <CardDescription>Janvier - Décembre 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="precipitation" fill="hsl(var(--chart-1))" radius={8}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Augmentation de 5.2% ce mois-ci <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Affichage des précipitations totales pour l'année 2024
        </div>
      </CardFooter>
    </Card>
  )
}
