import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Mayonesa', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
];

export const TableProducts = ({ products, onDeleteProduct }) => {


    const deleteProduct = (product) => {
        
    }
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Acción</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow
                            key={row.key}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">
                                <button onClick={() => onDeleteProduct(row)}>
                                    <span className="  text-primary  flex items-center justify-center ">
                                        <FontAwesomeIcon className="text-red-400" style={{ fontSize: '1.6em' }} icon={faCircleXmark} aria-hidden="true" />
                                    </span>
                                </button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
