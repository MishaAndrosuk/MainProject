import React from "react";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const CreateUserPage = () => {
    const query = useQuery();
    const user = {
        id: query.get("userId"),
        userName: query.get("userName"),
        email: query.get("email"),
        role: query.get("role"),
        name: query.get("name"),
        surname: query.get("surname")
    };

    const onSubmitHandler = (values) => {
        console.log(values);
    };

    const validationSchema = Yup.object({
        userName: Yup.string()
            .required("Username is required"),
        email: Yup.string()
            .required("Email is required")
            .matches(
                /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                "Invalid email format"
            ),
        name: Yup.string()
            .required("Name is required"),
        surname: Yup.string()
            .required("Surname is required")
    });

    const formik = useFormik({
        initialValues: {
            userName: user.userName || "",
            email: user.email || "",
            role: user.role || "user",
            name: user.name || "",
            surname: user.surname || "",
        },
        onSubmit: onSubmitHandler,
        validationSchema: validationSchema,
    });

    return (
        <Container sx={{ mt: 3, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
                Create User
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Box sx={{ mt: 2, textAlign: "left" }}>
                    <TextField
                        fullWidth
                        id="userName"
                        name="userName"
                        label="Username"
                        variant="outlined"
                        value={formik.values.userName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.userName && formik.errors.userName ? (
                        <div style={{ color: "red" }}>
                            {formik.errors.userName}
                        </div>
                    ) : null}
                </Box>

                <Box sx={{ mt: 2, textAlign: "left" }}>
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div style={{ color: "red" }}>
                            {formik.errors.email}
                        </div>
                    ) : null}
                </Box>

                <Box sx={{ mt: 2, textAlign: "left" }}>
                    <TextField
                        fullWidth
                        id="role"
                        name="role"
                        label="Role"
                        variant="outlined"
                        value={formik.values.role}
                    />
                </Box>

                <Box sx={{ mt: 2, textAlign: "left" }}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        variant="outlined"
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div style={{ color: "red" }}>
                            {formik.errors.name}
                        </div>
                    ) : null}
                </Box>

                <Box sx={{ mt: 2, textAlign: "left" }}>
                    <TextField
                        fullWidth
                        id="surname"
                        name="surname"
                        label="Surname"
                        variant="outlined"
                        value={formik.values.surname}
                    />
                    {formik.touched.surname && formik.errors.surname ? (
                        <div style={{ color: "red" }}>
                            {formik.errors.surname}
                        </div>
                    ) : null}
                </Box>

                <Box sx={{ mt: 3 }}>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Box>
            </form>
        </Container>
    );
};

export default CreateUserPage;
