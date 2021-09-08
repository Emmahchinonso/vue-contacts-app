<template>
  <ContactItem
    v-for="contact in contacts"
    :key="contact.id"
    :contact="contact"
  />
</template>

<script>
import ContactItem from "./ContactItem.vue";

export default {
  name: "ContactList",
  props: ["contacts"],
  components: {
    ContactItem,
  },
};
</script>
