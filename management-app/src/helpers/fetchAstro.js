const fetchAstro = (endpoint, headers) => {
  return fetch(`http://localhost:8080/api/${endpoint}`, headers).then(
    response => {
      if (response.ok) {
        return response.json()
      }
      throw response
    }
  )
}

export default fetchAstro