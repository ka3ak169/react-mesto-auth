import { useState } from "react";

export function useFormValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    // console.log(evt.target.name, evt.target.value, evt.target.form);
    const {name, value, validationMessage, form } = evt.target;
    setValues((oldValues) => ({...oldValues, [name]: value}));
    setErrors((oldErrors) => ({...oldErrors, [name]: validationMessage}));
    // console.log(form.checkValidity());
    setIsValid(form.checkValidity());
  }

  const setValue = (value, name) => {
    setValues((oldValues) => ({...oldValues, [name]: value}));
  }

  const setError = (validationMessage, name) => {
    setErrors((oldValues) => ({...oldValues, [name]: validationMessage}));
  }

  const reset = (initialValues) => {
    setValues(initialValues);
    setErrors();
    setIsValid(false);
  }

  return { values, errors, isValid, initialValues, handleChange, setValue, setError, reset }
}