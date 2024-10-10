"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";
const MonthlyStudyTime = () => {
  const chartData = [
    { month: "1月", time: 0 },
    { month: "2月", time: 38 },
    { month: "3月", time: 45 },
    { month: "4月", time: 24 },
    { month: "5月", time: 28 },
    { month: "6月", time: 12 },
    { month: "7月", time: 34 },
  ];

  const chartConfig = {
    time: {
      label: "学習時間",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">月別学習時間</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -24,
            }}
          >
            <XAxis
              type="number"
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={8}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="time" fill="var(--color-time)" radius={5}>
              <LabelList
                dataKey="time"
                position="right"
                offset={8}
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

export default MonthlyStudyTime;
