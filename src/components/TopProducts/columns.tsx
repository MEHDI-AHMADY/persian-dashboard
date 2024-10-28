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
    cell: ({ row }) => (
      <div className="w-full h-2 rounded-full bg-white">
        <div
          className="bg-slate-400 h-2 rounded-full"
          style={{ width: `${row.original.popularity}%` }}
        ></div>
      </div>
    ),
  },
  {
    accessorKey: "sales",
    header: "فروش ها",
    cell: ({ row }) => (
      <div className="bg-slate-400 rounded-md w-[40px] p-1">
        {`${row.original.sales}%`}
      </div>
    ),
  },
];
