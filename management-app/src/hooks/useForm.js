import { useState } from "react"

export const useForm = (initialState) => {
  const [initialValues, setInitialValues] = useState(initialState)

  const [values, setValues] = useState(initialState)

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }
  const resetForm = () => {
    setValues(initialValues)
  }
  const changeInitialValues = (values) => {
    setInitialValues(values)
  }
  return {
    changeInitialValues,
    handleChange,
    values,
    resetForm
  }
}
