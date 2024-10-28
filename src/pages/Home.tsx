import CustomerFulfilment from "@/components/CustomerFulfilment/CustomerFullfilment";
import Sales from "@/components/Sales/Sales";
import TopProducts from "@/components/TopProducts/TopProducts";
import Users from "@/components/Users/Users";
import YearlySales from "@/components/YearlySales/YearlySales";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-5">
      <Sales />
      <YearlySales />
      <TopProducts />
      <CustomerFulfilment />
      <Users />
    </div>
  );
}
