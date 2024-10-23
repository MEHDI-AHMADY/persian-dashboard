import SaleBox from "./SaleBox";
import { salesDetails } from "./salesDetails";

export default function Sales() {
  return (
    <section className="bg-primary p-4 rounded-md col-span-2">
      <div className="flex flex-col gap-1">
        <h3 className="">فروش امروز</h3>
        <span className="text-gray-400 text-sm">خلاصه فروش ها</span>
      </div>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 mt-4">
        {salesDetails.map((icon , index) => (
            <SaleBox key={index} {...icon} />
        ))}
      </div>
    </section>
  );
}
