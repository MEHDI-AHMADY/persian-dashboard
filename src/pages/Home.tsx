import Chart from "@/components/Chart/Chart";
import Sales from "@/components/Sales/Sales";

const data = [
  { name: "فروردین", sales: 1_000_000, revenue: 2400 },
  { name: "اردیبهشت", sales: 3_000_000, revenue: 1398 },
  { name: "خرداد", sales: 2_000_000, revenue: 9800 },
  { name: "تیر", sales: 2_780_000, revenue: 3908 },
  { name: "مرداد", sales: 1_890_000, revenue: 4800 },
  { name: "شهریور", sales: 900_000, revenue: 1800 },
  { name: "مهر", sales: 2_090_000, revenue: 2800 },
  { name: "آبان", sales: 3_900_000, revenue: 1800 },
  // { name: "آذر", sales: 8_900_000, revenue: 3000 },
  // { name: "دی", sales: 9_900_000, revenue: 3300 },
  // { name: "بهمن", sales: 1_000_000, revenue: 1800 },
  // { name: "اسفند", sales: 2_701_000, revenue: 1000 },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
      <Sales />
         <Chart
          className="bg-primary border-none rounded-md col-span-2 md:col-span-1 z-[1]"
          type="bar"
          data={data}
          xAxis="name"
          yAxis={["sales"]}
          title="فروش سال"
        />
      <div>dsdfhslfjlk</div>
    </div>
  );
}
