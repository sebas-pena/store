import React, { useState, useEffect } from 'react';


export const useAstro = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAstro = ({ endpoint, method = "GET", headers, body }) => {
    if (isLoading) return
    setIsLoading(true);
    fetch(`http://localhost:8080/api/${endpoint}`, {
      method,
      headers: {
        "content-type": "application/json",
        ...headers
      },
      body: JSON.stringify(body)
    })
      .then((res) => {
        res.json()
          .then(data => {
            if (res.ok) {
              setData(data)
              setError(null)
            } else {
              setData(null)
              setError(data)
            }
          })
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => { setIsLoading(false) });
  };
  return [{ data, isLoading, error }, fetchAstro];
}