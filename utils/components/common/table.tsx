import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
  SortingState,
  ColumnDef,
} from "@tanstack/react-table";

type Student = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

interface TableComponentProps {
  data: Student[];
  columns: ColumnDef<Student>[];
  tableName: string;
}


interface TableConfig {
  defaultDisplayRows: number[];
}

const TableComponent: React.FC<TableComponentProps> = ({
  data,
  columns,
  tableName,
}) => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 20,
  });

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const defaultDisplayRow: TableConfig["defaultDisplayRows"] = [5, 10, 15, 20];

  const table = useReactTable({
    data,
    columns,
    state: { pagination, sorting },
    enableSortingRemoval: false,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
  });

  return (
    <div className="d-flex justify-content-center align-items-center p-2">
      <div className="card vh-100">
        <div className="d-flex justify-content-center align-items-center mt-2 h4">
          {tableName || "Table"}
        </div>
        <div className="mb-3 ms-2 d-flex justify-content-start">
          <label className="me-2">Rows per page:</label>
          <select
            className="form-select w-auto"
            value={pagination.pageSize}
            onChange={(e) =>
              setPagination((prev) => ({
                ...prev,
                pageSize: Number(e.target.value),
              }))
            }
          >
            {defaultDisplayRow.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="container overflow-auto" style={{ maxHeight: "500px" }}>
          <table className="table border">
            <thead className="top-0 bg-white position-sticky z-1">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="border-b ">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-2 cursor-pointer"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="d-flex gap-1">
                        <span className=" text-success">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </span>
                        <span>
                          <button
                            className="border-0 bg-white"
                            onClick={() => header.column.toggleSorting(true)}
                          >
                            ↑{header.column.getIsSorted() === "asc"}
                          </button>
                          <button
                            className="border-0 bg-white"
                            onClick={() => header.column.toggleSorting(true)}
                          >
                            ↓{header.column.getIsSorted() === "desc"}
                          </button>
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="my-1 d-flex justify-content-center align-items-center gap-2">
          <button
            className="btn btn-primary"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </button>
          <span>
            <strong>{table.getState().pagination.pageIndex + 1}</strong> of{" "}
            {table.getPageCount()}
          </span>
          <button
            className="btn btn-primary"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
