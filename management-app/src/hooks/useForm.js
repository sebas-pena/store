import { useState } from "react"

export const useForm = (initialState) => {
  const [initialValues, setInitialValues] = useState(initialState)

  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    const target = e.target
    setValues((values) => ({
      ...values,
      [target.name]: target.type === "checkbox" ? target.checked : target.value
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
