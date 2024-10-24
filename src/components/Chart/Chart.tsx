import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  TooltipProps
} from "recharts";

type ChartType = "bar" | "line" | "area";

interface ChartData {
  [key: string]: string | number;
}

interface ChartProps {
  type: ChartType;
  height?: number;
  data: ChartData[];
  xAxis: string;
  yAxis: string[];
  title: string;
  className?: string;
  tick?: boolean;
}

const Chart = ({
  type,
  data,
  tick = false,
  height = 140,
  xAxis,
  yAxis,
  title,
  className = "",
}: ChartProps) => {
  
  const ChartComponents = {
    bar: BarChart,
    line: LineChart,
    area: AreaChart,
  };

  const DataComponents = {
    bar: Bar,
    line: Line,
    area: Area,
  };

  const ChartComponent = ChartComponents[type];
  const DataComponent = DataComponents[type];

  return (
    <Card className={`${className} p-2 overflow-hidden`}>
      <CardHeader>
        <CardTitle className={`text-right text-white font-normal`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent
        className={`w-[112%] flex justify-between p-0 mb-0`}
        style={{height : `${height}px`}}
      >
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent data={data} barCategoryGap="20%">
            <XAxis
              dataKey={xAxis}
              stroke="#A9DFD8"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tick={tick}
              reversed={true}
              padding={{ left: 0, right: 0 }}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tick={tick}
              tickFormatter={(value) => `${value}`}
              margin={{ bottom: 0 }}
            />
            {yAxis.map((axis) => (
              <DataComponent
                key={axis}
                type="monotone"
                dataKey={axis}
                stroke={`#A9DFD8`}
                fill={`#A9DFD8`}
                strokeWidth={1}
                dot={false}
                {...(type === "bar" && { barSize: 15 })}
                {...(type === "area" && { fillOpacity: 0.3 })}
              />
            ))}
            <Tooltip content={<CustomToolTip/>} cursor={false}/>
          </ChartComponent>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

const CustomToolTip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded p-2 shadow-lg">
        <p className="font-bold">{`ماه: ${payload[0].payload.name}`}</p>
        {payload.map((data) => (
          <p key={data.name} className="text-sm">{`فروش: ${data.value.toLocaleString()} تومان`}</p>
        ))}
      </div>
    );
  }
  return null;
};

export default Chart;
