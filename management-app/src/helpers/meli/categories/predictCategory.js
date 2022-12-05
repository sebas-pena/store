const predictCategory = (query) => {
  return fetch(
    `https://api.mercadolibre.com/sites/MLU/domain_discovery/search?q=${query}&target=core`
  )
    .then((res) => res.json())

}

export default predictCategory