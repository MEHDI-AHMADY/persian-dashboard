
import { TooltipProps } from "recharts"
import Chart from "../Chart/Chart"

const CustomerFulfillmentChart = () => {
  const data = [
    { name: "هفته اول", thisMonth: 10, lastMonth: 70 },
    { name: "هفته دوم", thisMonth: 85, lastMonth: 65 },
    { name: "هفته سوم", thisMonth: 75, lastMonth: 50 },
    { name: "هفته چهارم", thisMonth: 15, lastMonth: 45 },
  ]

  const customTooltip = ({ active, payload }: TooltipProps<any, any>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-300 rounded p-2 shadow-lg">
          <p className="font-bold">{`هفته: ${payload[0].payload.name}`}</p>
          {payload.map((entry) => (
            <p key={entry.name} className="text-sm">
              {`${entry.name === "thisMonth" ? "این ماه" : "ماه قبل"}: ${entry.value}نفر`}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <Chart
    className="bg-primary rounded-md border-none col-span-2 md:col-span-1"
      type="area"
      data={data}
      xAxis="name"
      yAxis={["thisMonth", "lastMonth"]}
      title="تکمیل مشتری"
      tick={false}
      tooltipContent={customTooltip}
    />
  )
}

export default CustomerFulfillmentChart