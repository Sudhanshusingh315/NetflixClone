import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzhkNmQ3YzBiYWZkODRjZTJjNTY5ZDFjNTU2MjkyYiIsInN1YiI6IjY1YzM1NDc5OTYwMzMxMDE4NGI5MDg0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.42ZTTa57f_3LdKgs-LNG8yoGKWH9NurkkgkxbQS4rAk";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
export const background_path = async (meow) => {
  // making a fake api call
  const data = await axios.get(`/${meow}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(data);
};

export const Configuration = async () => {
  const { data } = await axios.get("/configuration", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const base_url = data.images.secure_base_url;
  console.log(base_url);
  return base_url + "original";
};
