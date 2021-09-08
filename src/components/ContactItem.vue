<template>
  <article class="contact-item">
    <div>
      <h2 class="contact-item__title">{{ contact.first_name }}</h2>
      <img v-bind:src="avatar" alt="" className="contact-item__img" />
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
    const { avatar, id } = this.contact;
    return {
      avatar: avatar,
      to: `/contacts/${id}`,
    };
  },
};
</script>
