import api from "../config/api";

export const submitQuote = (data) => {
  return api.post("/quotes", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};