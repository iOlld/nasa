const baseUrl = import.meta.env.VITE_NASA_BASE_URL
const apiKey = import.meta.env.VITE_NASA_API_KEY

const fetchData = async (api) => {
  // console.log(`${baseUrl}/${api}/${apiKey}`)
  return await fetch(`${baseUrl}/${api}${apiKey}`)
    .then((res) => res.json())
    .then((res) => res);
};

export default {
  fetchData
};
