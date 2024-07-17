import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
    TablePagination,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useAction } from "../../hooks/useAction";
import { useSelector, useDispatch } from 'react-redux';


const UsersPage = () => {
    const users = useSelector((state) => state.usersReducer.users);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const { deleteUser } = useAction();
    const dispatch = useDispatch();

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleDelete = (id) => {
        deleteUser(id);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedUsers = users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Id</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">User name</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Email</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Role</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Full name</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }} align="center">Edit / Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedUsers.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell align="center">{item.id}</TableCell>
                                <TableCell align="center">{item.userName}</TableCell>
                                <TableCell align="center">{item.email}</TableCell>
                                <TableCell align="center">{item.role}</TableCell>
                                <TableCell align="center">{`${item.name} ${item.surname}`}</TableCell>
                                <TableCell align="center">
                                    <Link to={`createuser?userId=${item.id}&userName=${item.userName}&email=${item.email}&role=${item.role}&name=${item.name}&surname=${item.surname}`}>
                                        <EditIcon />
                                    </Link>
                                    <Link>
                                        <DeleteIcon onClick={() => handleDelete(item.id)} sx={{ ml: "30px" }} />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={users.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 15, 20, 25]}
            />
        </Container>
    );
};

export default UsersPage;