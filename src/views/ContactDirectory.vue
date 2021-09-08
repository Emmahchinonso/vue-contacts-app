<template>
  <main>
    <div class="container">
      <button class="btn btn--rounded">+</button>
      <form></form>
      <div class="results">
        <article v-for="contact in contacts" :key="contact.id"></article>
      </div>
    </div>
  </main>
</template>

<script>
import { fetchContacts } from "@/api/contacts";
import ref from "vue";
export default {
  name: "ContactDirectory",
  setup(props) {
    const contactList = ref([]);
    const getContacts = async () => {
      contactList.value = await fetchContacts("https://reqres.in/");
      console.log(contactList.value);
    };
    return {
      contactList,
      getContacts,
    };
  },
};
</script>
