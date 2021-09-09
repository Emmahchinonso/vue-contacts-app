<template>
  <div class="container">
    <img
      v-bind:src="contacts.avatar"
      v-bind:alt="contacts.name"
      class="img-box"
    />
    <div class="details">
      <p>
        <span class="u-bold">Fullname: </span> {{ contacts.first_name }}
        {{ contacts.last_name }}
      </p>
      <p><span class="u-bold">email: </span>{{ contacts.email }}</p>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import useContactFetcher from "@/api/useContactsFetcher";
import { toRefs } from "vue";

export default {
  name: "ContactDetails",
  setup() {
    const router = useRoute();
    const id = router.params.id;
    const state = useContactFetcher(`https://reqres.in/api/users/${id}`);

    return {
      ...toRefs(state),
    };
  },
};
</script>
