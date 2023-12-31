import axios from "axios";

export const instanceRequest = axios.create({
  // baseURL: "http://localhost:1337/api/",
    baseURL: import.meta.env.VITE_APP_URL,

  headers: {
    Authorization: import.meta.env.VITE_APP_TOKEN
    // Authorization: "63c9dcfe3062caff8ee9737fb98d73b6e0f0eacdd3b26b8477856c2ad3c3e653dd9147d8e068d6384f6bcb465df4026df242f392d685cede14c6e42515b5046ba6deb2bdcddd5fcd355b0567855787c6f05eee49c80f1146837933963e691f4607da41e4cc65d21e4ef41385fc011aeeaaa8043c1387f14b77e8146c0243ee4b" 
  },
});

