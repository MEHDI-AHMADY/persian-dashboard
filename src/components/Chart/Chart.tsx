import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Bar, BarChart, Line, LineChart, Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

type ChartType = 'bar' | 'line' | 'area';

interface ChartData {
  [key: string]: string | number;
}

interface ChartProps {
  type: ChartType;
  data: ChartData[];
  xAxis: string;
  yAxis: string[];
  title: string;
  className?: string;
  tick?: boolean;
}

const Chart = ({ type, data, tick = false, xAxis, yAxis, title, className = "" }: ChartProps) => {
  const ChartComponent = 
    type === 'bar' ? BarChart : 
    type === 'line' ? LineChart : 
    AreaChart;

  const DataComponent = 
    type === 'bar' ? Bar : 
    type === 'line' ? Line : 
    Area;

  return (
    <Card className={`w-full ${className}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="w-full flex justify-between h-[100px]">
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent data={data}>
            <XAxis
              dataKey={xAxis}
              stroke="#888888"
              fontSize={12}
              tickLine={false}  
              axisLine={false}
              tick={tick}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tick={tick}
              tickFormatter={(value) => `${value}`}
            />
            {yAxis.map((axis, index) => (
              <DataComponent
                key={axis}
                type="monotone"
                dataKey={axis}
                stroke={`hsl(${index * 50}, 10%, 50%)`}
                fill={`hsl(${index * 50}, 10%, 50%)`}
                strokeWidth={2}
                dot={false}
                {...(type === 'bar' ? { barSize: 15 } : {})}
                {...(type === 'area' ? { fillOpacity: 0.3 } : {})}
              />
            ))}
          </ChartComponent>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;