"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  CartesianGrid,
  LabelList,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts";

const WeekRank = () => {
  const chartData = [
    { date: "7/1", rank: 1 },
    { date: "7/2", rank: 2 },
    { date: "7/3", rank: 1 },
    { date: "7/4", rank: 5 },
    { date: "7/5", rank: 1 },
    { date: "7/6", rank: 8 },
    { date: "7/7", rank: 9 },
  ];

  const chartConfig = {
    rank: {
      label: "ランク",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">今週のランキング</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 24,
              right: 24,
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
            <YAxis
              reversed
              dataKey="rank"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Line dataKey="rank" type="step" stroke="var(--color-rank)">
              <LabelList
                position="bottom"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default WeekRank;
