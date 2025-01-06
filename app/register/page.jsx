"use client";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .notRequired(), 
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must be at least 6 characters and include uppercase, lowercase, number, and special character"
    )
    .required("Password is required"),
});

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    Swal.fire({
      icon: "success",
      title: "Profile Successfully Created!!!",
    });
    resetForm();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-2xl font-semibold text-center mb-6">REGISTER</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <Form>
              <Box sx={{ "& > :not(style)": { m: 2, width: "100%" } }}>
                <Field
                  as={TextField}
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />

                <Field
                  as={TextField}
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <Field
                  as={TextField}
                  id="phone"
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />

                <Field
                  as={TextField}
                  id="password"
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Box>

              <Button type="submit" variant="contained" fullWidth className="py-2">
                SUBMIT
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
