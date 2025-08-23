import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik Form Submitted:", values);
        alert("User registered successfully with Formik!");
        resetForm();
      }}
    >
      {() => (
        <Form className="space-y-4 p-4 max-w-sm mx-auto border rounded-lg">
          <div>
            <label className="block mb-1">Username</label>
            <Field name="username" type="text" className="border p-2 w-full" />
            <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <Field name="email" type="email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block mb-1">Password</label>
            <Field name="password" type="password" className="border p-2 w-full" />
            <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
          </div>

          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Register with Formik
          </button>
        </Form>
      )}
    </Formik>
  );
}