"use client";

import { useMemo, useState, useEffect } from "react";
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
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        
        // Transform the data to match the Student type
        const formattedData = data.map((user: unknown) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
        }));

        setStudents(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  return <TableComponent data={students} columns={columns} tableName="Student Data" />;
}
