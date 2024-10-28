import { ColumnDef } from "@tanstack/react-table";

export type User = {
  fullName: string;
  email: string;
};

export const userColumn: ColumnDef<User>[] = [
  {
    accessorKey: "fullName",
    header: "نام",
  },
  {
    accessorKey: "email",
    header: "ایمیل",
  },
];
