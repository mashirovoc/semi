"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

const DeviationFromDailyTargets = () => {
  const dailyTarget = 6;

  const chartData = [
    { date: "7/1", time: 5 },
    { date: "7/2", time: 12 },
    { date: "7/3", time: 7 },
    { date: "7/4", time: 0 },
    { date: "7/5", time: 3 },
    { date: "7/6", time: 2 },
    { date: "7/7", time: 2 },
  ].map((item) => ({
    ...item,
    deviation: item.time - dailyTarget,
  }));

  const chartConfig = {
    deviation: {
      label: "目標との乖離",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">デイリー目標との乖離</CardTitle>
      </CardHeader>
      <CardContent className="pb-3">
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
              tickMargin={12}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              tickMargin={8}
              axisLine={false}
              domain={["dataMin", "dataMax"]}
            />
            <ChartTooltip
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
            <Bar dataKey="deviation" barSize={40}>
              <LabelList
                position="top"
                dataKey="deviation"
                fillOpacity={1}
                formatter={(value: number) =>
                  `${value > 0 ? "+" : ""}${value.toFixed(1)}`
                }
              />
              {chartData.map((item) => (
                <Cell
                  key={item.date}
                  fill={
                    item.deviation >= 0
                      ? "hsl(var(--chart-1))"
                      : "hsl(var(--chart-2))"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="text-muted-foreground text-sm">
          あなたのデイリー目標は1日
          <span className="font-semibold text-foreground">6時間</span>です
        </div>
      </CardFooter>
    </Card>
  );
};

export default DeviationFromDailyTargets;
