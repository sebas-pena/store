import { useState, useEffect } from "react"

const useFetch = (...args) => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (
      fetch(...args)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw response
        })
        .then(
          data => setData(data)
        )
        .catch(error => {
          console.log(`Error fetching: ${args[0]}`, error)
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    )()
  }, [])

  return { data, error, loading }
}

export default useFetch