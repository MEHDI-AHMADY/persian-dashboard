import { useState } from "react";
import DataTable from "@/components/HomePage/TopProducts/DataTable";
import { userPageColumns } from "./columns";
import { useGetAllUsers } from "@/services/hooks";
import QuestionDialog from "@/components/common/Dialogs/QuestionDialog";

export default function UsersPage() {
  const { data: allUsers } = useGetAllUsers();

  const [isShowDeleteModal, setIsShowDeleteModal] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setSelectedUserId(id);
    setIsShowDeleteModal(true);
  };

  const handleEdit = (id: string) => {
    console.log("Edit user with id:", id);
  };

  const columns = userPageColumns(handleDelete, handleEdit);

  return (
    <div className="col-span-2 md:col-span-3 mt-4 lg:mt-10">
      <DataTable columns={columns} data={allUsers || []} title="کاربران" />
      {isShowDeleteModal && (
        <QuestionDialog
          question="آیا از حذف اطمینان دارید؟"
          setIsShowDeleteModal={setIsShowDeleteModal}
        />
      )}
    </div>
  );
}
