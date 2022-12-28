const predictCategory = (query) => {
  return fetch(
    `https://api.mercadolibre.com/sites/MLU/domain_discovery/search?q=${query}&target=core&limit=4`
  )
    .then((res) => res.json())

}

export default predictCategory