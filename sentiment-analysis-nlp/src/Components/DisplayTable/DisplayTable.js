import React, { useState } from 'react';
import { Paper , Table, TableHead, TableRow, TableCell, TableBody,TableContainer, TablePagination } from '@mui/material';

function DisplayTable({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const headers = data.length === 0 || Object.keys(data[0]).length === 0 ? ["String to Predict"] : Object.keys(data[0]);

  const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} size="small" aria-label="a dense table">
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {Object.values(row).map((cell, index) => (
                <TableCell key={index}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        sx={{ m: 1, minWidth: 900 }}
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}

export default DisplayTable;