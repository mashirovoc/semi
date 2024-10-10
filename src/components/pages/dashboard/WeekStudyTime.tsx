"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
const WeekStudyTime = () => {
  const chartData = [
    { date: "7/1", myTime: 2, otherTime: 2 },
    { date: "7/2", myTime: 1.5, otherTime: 3 },
    { date: "7/3", myTime: 2, otherTime: 4 },
    { date: "7/4", myTime: 3, otherTime: 1 },
    { date: "7/5", myTime: 1, otherTime: 5 },
    { date: "7/6", myTime: 4, otherTime: 1 },
    { date: "7/7", myTime: 12, otherTime: 2 },
  ];

  const chartConfig = {
    myTime: {
      label: "自分",
      color: "hsl(var(--chart-1))",
    },
    otherTime: {
      label: "他の利用者",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">今週の学習時間</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="myTime" fill="var(--color-myTime)" radius={4}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
            <Bar dataKey="otherTime" fill="var(--color-otherTime)" radius={4}>
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
    </Card>
  );
};

export default WeekStudyTime;
