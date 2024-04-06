import axios from "axios";

axios.interceptors.request.use((config) => {
  try {
    const token = import.meta.env.VITE_APP_API_KEY;
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  } catch (error) {
    throw new Error("Error On Fetch Value", error);
  }
});

export default axios;
