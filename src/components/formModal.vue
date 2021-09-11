<template>
  <div class="backdrop">
    <section class="form-modal">
      <div class="form-modal__top mb-3">
        <h2>Create new contact</h2>
        <button class="btn form-modal__cancel" @click="closeModal">x</button>
      </div>
      <form @submit="handleSubmit">
        <input
          class="form-modal__input mb-1"
          type="text"
          placeholder="First name"
          v-model="first_name"
          required
        />

        <input
          class="form-modal__input mb-1"
          type="text"
          placeholder="Last name"
          v-model="last_name"
          required
        />

        <input
          class="form-modal__input mb-1"
          type="email"
          placeholder="Email"
          v-model="email"
          required
        />

        <input
          class="form-modal__input mb-3"
          type="text"
          placeholder="Enter image url"
          v-model="avatar"
          required
        />

        <button
          class="btn form-modal__btn"
          type="submit"
          v-bind:disabled="isDisabled"
        >
          Create
        </button>
      </form>
    </section>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch } from "vue";
import { fetchContacts } from "../api/contacts";

export default {
  setup(_, { emit }) {
    const isDisabled = ref(true);
    const state = reactive({
      first_name: "",
      last_name: "",
      email: "",
      avatar: "",
    });

    watch(state, () => {
      isDisabled.value = !Object.values(state).every(Boolean);
    });

    const closeModal = () => {
      emit("closeModal");
    };

    const updateContacts = (result) => {
      closeModal();
      emit("update", result);
    };

    return {
      ...toRefs(state),
      state,
      isDisabled,
      closeModal,
      updateContacts,
    };
  },
  methods: {
    async handleSubmit(event) {
      event.preventDefault();
      let data = JSON.stringify(this.state);

      try {
        let result = await fetchContacts(process.env.VUE_APP_API_URL, { data });
        console.log(result);
        this.updateContacts(result);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
