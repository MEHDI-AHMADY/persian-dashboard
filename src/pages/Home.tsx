import Chart from "@/components/Chart/Chart";
import Sales from "@/components/Sales/Sales";

const data = [
  { name: 'Jan', sales: 4000, revenue: 2400 },
  { name: 'Feb', sales: 3000, revenue: 1398 },
  { name: 'Mar', sales: 2000, revenue: 9800 },
  { name: 'Apr', sales: 2780, revenue: 3908 },
  { name: 'May', sales: 1890, revenue: 4800 },
  { name: 'Jun', sales: 2390, revenue: 3800 },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-5">
      <Sales />
      {/* <Chart
        type="bar"
        data={data}
        xAxis="name"
        yAxis={["sales"]}
        title="Monthly Sales and Revenue"
        className="w-full bg-primary border-none rounded-md"
      /> */}
    </div>
  );
}
