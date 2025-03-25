"use client";

import { useMemo } from "react";
import mockData from "./data.json";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import TableComponent from "../../../utils/components/common/table";

type Student = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const columnHelper = createColumnHelper<Student>();

export default function App() {
  const columns: ColumnDef<Student>[] = useMemo(
    () => [
      columnHelper.accessor<"id", number>("id", {
        header: "ID",
      }),
      columnHelper.accessor<"name", string>("name", {
        header: "Name",
      }),
      columnHelper.accessor<"email", string>("email", {
        header: "Email"
      }),
      columnHelper.accessor<"phone", string>("phone", {
        header: "Phone",
      }),
    ] as ColumnDef<Student>[], 
    []
  );

  return <TableComponent data={mockData} columns={columns} tableName="my data" />;
}
