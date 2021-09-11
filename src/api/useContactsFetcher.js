import { fetchContacts } from "./contacts";
import { reactive, onMounted } from "vue";

export default function useContactsFetcher(url) {
  const state = reactive({ status: "idle", contacts: [], error: "" });

  const getContacts = async () => {
    state.status = { status: "pending" };

    try {
      const result = await fetchContacts(url);
      state.status = "success";
      state.contacts = result.data;
    } catch (error) {
      state.status = "error";
      state.error = error;
    }
  };

  onMounted(() => getContacts(url));

  return state;
}
