import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#f3f4f6',
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.common.white,
    },
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.common.white, 
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export const TableProducts = ({ products, onDeleteProduct }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Producto</StyledTableCell>
                        <StyledTableCell align="right">Precio</StyledTableCell>
                        <StyledTableCell align="right">Cantidad</StyledTableCell>
                        <StyledTableCell align="right">Acción</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.price}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">
                                <button
                                    onClick={() => onDeleteProduct(row)}
                                    aria-label="Eliminar producto"
                                    className="text-red-400"
                                >
                                    <FontAwesomeIcon style={{ fontSize: '1.6em' }} icon={faCircleXmark} />
                                </button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
