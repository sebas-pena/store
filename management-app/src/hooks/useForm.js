import { useState } from "react"

export const useForm = (initialState) => {
  const [initialValues, setInitialValues] = useState(initialState)
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    if (e.custom === true) {
      setValues({ ...values, [e.name]: e.value })
    } else {

      const target = e.target

      const newValues = {
        ...values
      }

      const { type, name } = target
      if (type === "checkbox") {
        newValues[name] = target.checked
      } else if (type === "file") {
        if (target.files && target.files[0]) newValues[name] = target.files[0]
        else newValues[name] = initialValues[name]
      } else {
        newValues[name] = target.value
      }
      setValues(newValues)
    }
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
