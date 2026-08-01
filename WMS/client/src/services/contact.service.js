import api from "../config/api";

export const submitContact = (data) => {
  return api.post("/contact", data);
};