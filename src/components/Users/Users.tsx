import { useGetAllUsers } from "@/services/hooks";
import DataTable from "../TopProducts/DataTable";
import { userColumn } from "./columns";


export default function Users() {
  const { data: allUsers } = useGetAllUsers();

  return (
    <div className="col-span-2 md:col-span-3">
        <DataTable columns={userColumn|| []} data={allUsers?.slice(0,5) || []} title="کاربران"/>
    </div>
    );
}
