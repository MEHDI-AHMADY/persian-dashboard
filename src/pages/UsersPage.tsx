import DataTable from "@/components/HomePage/TopProducts/DataTable";
import { userColumn } from "@/components/HomePage/Users/columns";
import { useGetAllUsers } from "@/services/hooks";

export default function UsersPage() {
  const { data: allUsers } = useGetAllUsers();

  return (
    <div className="col-span-2 md:col-span-3 mt-4 lg:mt-10">
      <DataTable
        columns={userColumn || []}
        data={allUsers || []}
        title="کاربران"
      />
    </div>
  )
}
