import { useState } from "react"

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState)

  const handleChange = (event) => {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return {
    handleChange,
    values,
  }
}
