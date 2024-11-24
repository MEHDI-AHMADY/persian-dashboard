import { ColumnDef } from "@tanstack/react-table";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa"

export type User = {
  fullName: string;
  email: string;
  _id: string; 
};

export const userPageColumns = (
  onDelete: (id: string) => void,
  onEdit: (id: string) => void
): ColumnDef<User>[] => [
  {
    accessorKey: "fullName",
    header: "نام",
  },
  {
    accessorKey: "email",
    header: "ایمیل",
  },
  {
    id: "delete",
    header: "",
    cell: ({ row }) => (
      <div className="w-full h-4 rounded-full">
        <MdDelete 
          className="text-lg cursor-pointer" 
          onClick={() => {
            onDelete(row.original._id)
            console.log(row.original._id)
          }} 
        />
      </div>
    ),
  },
  {
    id: "edit",
    header: "",
    cell: ({ row }) => (
      <div className="w-full h-4 rounded-full">
        <FaUserEdit 
          className="text-lg cursor-pointer" 
          onClick={() => onEdit(row.original._id)}
        />
      </div>
    ),
  },
];