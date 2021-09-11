import axios from "axios";

export const fetchContacts = async (url, { data: payload } = {}) => {
  let resp = await axios({
    url: url,
    method: payload ? "post" : "get",
    data: payload,
  });

  let data = resp.data;

  return data;
};
