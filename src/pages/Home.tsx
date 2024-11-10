import CustomerFulfilment from "@/components/HomePage/CustomerFulfilment/CustomerFullfilment";
import Sales from "@/components/HomePage/Sales/Sales";
import TopProducts from "@/components/HomePage/TopProducts/TopProducts";
import Users from "@/components/HomePage/Users/Users";
import YearlySales from "@/components/HomePage/YearlySales/YearlySales";

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
