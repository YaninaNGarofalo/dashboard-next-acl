"use client";
import React, { useState } from "react";

const Form = ({ children, formClass }) => {
  const childrenArr = React.Children.toArray(children);
  const [form, setForm] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <FormComponent 
      childrenArr={childrenArr}
      form={form}
      setForm={setForm}
      handleSubmit={handleSubmit}
      classes={formClass}
    />
  );
};

const FormComponent = ({ handleSubmit, childrenArr, form, setForm, classes}) => {
  return (
    <form className={classes} onSubmit={handleSubmit}>
      {childrenArr.map((child) => React.cloneElement(child, { form, setForm }))}
    </form>
  );
};

export default Form;