<template>
  <div class="container">
    <div class="details">
      <img
        v-bind:src="contacts.avatar"
        v-bind:alt="contacts.name"
        class="details__img"
      />
      <div class="details__content">
        <p class="mb-1">
          <span class="u-bold">Fullname: </span> {{ contacts.first_name }}
          {{ contacts.last_name }}
        </p>
        <p><span class="u-bold">Email: </span>{{ contacts.email }}</p>
      </div>
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
