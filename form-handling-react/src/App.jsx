import React from 'react';
import './App.css'
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center">React Form Handling</h1>
      <h2 className="text-lg font-semibold mt-6">Controlled Components</h2>
      <RegistrationForm />
      <h2 className="text-lg font-semibold mt-6">Formik + Yup</h2>
      <FormikForm />
    </div>
  );
}

export default App;