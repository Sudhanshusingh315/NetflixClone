import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzhkNmQ3YzBiYWZkODRjZTJjNTY5ZDFjNTU2MjkyYiIsInN1YiI6IjY1YzM1NDc5OTYwMzMxMDE4NGI5MDg0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.42ZTTa57f_3LdKgs-LNG8yoGKWH9NurkkgkxbQS4rAk";

// this is the api call
const fetchApi = async (url) => {
  // making a fake api call
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

//  this will run on the all
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setData(null);
    setLoading(true);

    fetchApi(url)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
      });
  }, [url]);

  return { data, loading };
};
