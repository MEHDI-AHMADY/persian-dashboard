import { ColumnDef } from "@tanstack/react-table";

export type Product = {
  number?: number;
  name: string;
  popularity: number;
  sales: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "number",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "نام",
  },
  {
    accessorKey: "popularity",
    header: "محبوبیت",
  },
  {
    accessorKey: "sales",
    header: "فروش ها",
  },
];
