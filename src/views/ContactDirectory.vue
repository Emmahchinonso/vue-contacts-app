<template>
  <main>
    <div class="container">
      <button @click="handleModal" class="btn btn--rounded">+</button>
      <form v-if="showModal"></form>

      <h3 v-if="status === 'loading' || status === 'pending'">Loading...</h3>

      <p v-if="status === 'error'">
        There was an error loading the data {{ error }}
      </p>

      <div v-if="status === 'success'" class="results">
        <ContactList :contacts="contacts" />
      </div>
    </div>
  </main>
</template>

<script>
import ContactList from "../components/ContactList.vue";
import { fetchContacts } from "@/api/contacts";
import { reactive, onMounted, toRefs, ref } from "vue";

export default {
  name: "ContactDirectory",
  components: { ContactList },
  setup() {
    const state = reactive({ status: "idle", contacts: [], error: "" });
    const showModal = ref(false);
    console.log(state);

    const getContacts = async (url) => {
      state.status = { status: "pending" };

      try {
        const resp = await fetchContacts(url);

        state.status = "success";
        state.contacts = resp.data;
      } catch (error) {
        state.status = "error";
        state.error = error;
      }
    };

    onMounted(() => getContacts("https://reqres.in/api/users"));

    return {
      ...toRefs(state),
      showModal,
      getContacts,
    };
  },
  methods: {
    handleModal() {
      this.showModal = true;
    },
  },
};
</script>
