import { columns } from "./columns";
import DataTable from "./DataTable";

const topProductsData = [
    {number : 1 ,name : "محصول1" , popularity : 50 , sales : 40},
    {number : 2 ,name : "محصول2" , popularity : 60 , sales : 60},
    {number : 3 ,name : "محصول3" , popularity : 70 , sales : 80},
]

export default function TopProducts() {
  return (
    <div className="col-span-2">
        <DataTable columns={columns} data={topProductsData}/>
    </div>
  )
}
