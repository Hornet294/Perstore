import React from 'react';
import { Formik, Form, Field } from 'formik';

const AdoptionForm = ({ petId }) => {
  const handleSubmit = (values) => {
    alert(`Application submitted for pet ID: ${petId}
Name: ${values.name}
Email: ${values.email}`);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field name="name" placeholder="Your Name" required />
        <Field name="email" placeholder="Your Email" required />
        <button type="submit">Submit Application</button>
      </Form>
    </Formik>
  );
};

export default AdoptionForm;
