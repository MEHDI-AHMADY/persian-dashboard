import { useGetAllUsers } from "@/services/hooks";
import DataTable from "../TopProducts/DataTable";
import { userColumn } from "./columns";

export default function Users() {
  const { data: allUsers } = useGetAllUsers();

  const lastUser = allUsers?.length;
  const fifthOfLastUsers = lastUser - 5;

  return (
    <div className="col-span-2 md:col-span-3">
      <DataTable
        columns={userColumn || []}
        data={allUsers?.slice(fifthOfLastUsers, lastUser) || []}
        title="کاربران"
      />
    </div>
  );
}
