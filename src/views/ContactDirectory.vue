<template>
  <main>
    <div class="directory container">
      <button @click="handleModal" class="directory__btn btn">+</button>
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
import useContactFetcher from "@/api/useContactsFetcher";
import { toRefs, ref } from "vue";

export default {
  name: "ContactDirectory",
  components: { ContactList },
  setup() {
    const state = useContactFetcher("https://reqres.in/api/users");
    const showModal = ref(false);

    return {
      ...toRefs(state),
      showModal,
    };
  },
  methods: {
    handleModal() {
      this.showModal = true;
    },
  },
};
</script>
