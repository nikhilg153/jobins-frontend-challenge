import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

interface Column {
  id: "name" | "code" | "population" | "size" | "density" | "status" | "action";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "name", label: "ID", minWidth: 170 },
  { id: "code", label: "CUSTOMER", minWidth: 100 },
  {
    id: "population",
    label: "DATE",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "TOTAL",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "METHOD",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "status",
    label: "STATUS",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
  {
    id: "action",
    label: "ACTION",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: string;
  size: string;
  density: string;
  status: string;
  action: string;
}

function createData(
  name: string,
  code: string,
  population: string,
  size: string,
  density: string,
  status: string,
  action: string
): Data {
  return { name, code, population, size, density, status, action };
}

const rows = [
  createData(
    "#5089",
    "Joseph Wheeler",
    "6 April, 2023",
    "$2,564",
    "CC",
    "Pending",
    "View Details"
  ),
  createData(
    "#5089",
    "Joseph Wheeler",
    "6 April, 2023",
    "$2,564",
    "CC",
    "Pending",
    "View Details"
  ),
  createData(
    "#5089",
    "Joseph Wheeler",
    "6 April, 2023",
    "$2,564",
    "CC",
    "Pending",
    "View Details"
  ),
  createData(
    "#5089",
    "Joseph Wheeler",
    "6 April, 2023",
    "$2,564",
    "CC",
    "Pending",
    "View Details"
  ),
  createData(
    "#5089",
    "Joseph Wheeler",
    "6 April, 2023",
    "$2,564",
    "CC",
    "Pending",
    "View Details"
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        overflow: "hidden",
        marginLeft: "10px",
        marginRight: "10px",
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            color:
                              column.id === "action"
                                ? "#0F60FF"
                                : column.id === "status"
                                ? "#FFC600"
                                : "inherit",
                          }}
                        >
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
