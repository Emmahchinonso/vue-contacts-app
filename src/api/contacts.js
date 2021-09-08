export const fetchContacts = async (url) => {
  const res = await fetch(url);

  const jsonObj = await res.json();

  return jsonObj;
};
