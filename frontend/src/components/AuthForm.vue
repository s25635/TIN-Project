<template>
  <div>
    <h2>{{ formTitle }}</h2>
    <form @submit.prevent="submitForm">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="formData.username" required>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="formData.password" required>

      <button type="submit">{{ formAction }}</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formTitle: 'Register',
      formAction: 'Register',
      formData: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      this.$emit('submit', this.formData);
    },
  },
};
</script>

<style scoped>

</style>
