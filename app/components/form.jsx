"use client";
import React, { useState } from "react";
const Form = ({ submitAction, children, formClass, val }) => {
  const childrenArr = React.Children.toArray(children);
  const [form, setform] = useState({});
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();    
    const tempForm = await submitAction(form);
    if (tempForm.error) {
      setError(tempForm);
      return;
    }
  };

  return (
    <FormComponent 
      childrenArr={childrenArr}
      form={form}
      setform={setform}
      handleSubmit={handleSubmit}
      classes={formClass}
      error={error}
      val={val}
    />
  );
};

const FormComponent = ({ handleSubmit, childrenArr, form, setform, classes, error, val}) => {
  return (
    <form onSubmit={handleSubmit}>
    {childrenArr.map((child) => React.cloneElement(child, { form, setform }))}
    {error && (
      <p className={classes}>
        {error.text}
      </p>
    )}
    <button type="submit" className="d-btn d-btn-primary-2 mt-2">{val}</button>
  </form>
  );
};

export default Form;