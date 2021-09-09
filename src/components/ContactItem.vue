<template>
  <article class="contact-item mb-3">
    <div class="contact-item__left">
      <h2 class="contact-item__title">{{ contact.first_name }}</h2>
      <img v-bind:src="contact.avatar" className="contact-item__img" />
    </div>
    <div>
      <router-link v-bind:to="to" class="contact-item__btn btn"
        >view</router-link
      >
    </div>
  </article>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  data() {
    const { id } = this.contact;
    return {
      to: `/contacts/${id}`,
    };
  },
};
</script>
