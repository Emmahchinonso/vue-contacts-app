<template>
  <main class="container">
    <section class="directory">
      <h1 class="directory__title">Contact Directory</h1>
      <button
        @click="openModal"
        title="Add new contact"
        class="directory__btn btn"
      >
        +
      </button>

      <FormModal
        v-if="showModal"
        @closeModal="closeModal"
        @update="updateContacts"
      />

      <h3 v-if="status === 'loading' || status === 'pending'">Loading...</h3>

      <p v-if="status === 'error'">
        There was an error loading the data {{ error }}
      </p>

      <div v-if="status === 'success'" class="results">
        <ContactList :contacts="contacts" />
      </div>
    </section>
  </main>
</template>

<script>
import ContactList from "../components/ContactList.vue";
import FormModal from "../components/FormModal.vue";
import useContactFetcher from "@/api/useContactsFetcher";
import { toRefs, ref, watch } from "vue";

export default {
  name: "ContactDirectory",
  components: { ContactList, FormModal },
  setup() {
    const state = useContactFetcher(process.env.VUE_APP_API_URL);
    const showModal = ref(false);

    watch(state, () => console.log(state.contacts));

    return {
      ...toRefs(state),
      showModal,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    updateContacts(data) {
      this.contacts = [...this.contacts, data];
    },
  },
};
</script>
