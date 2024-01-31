<template>
  <div>
    <h2>{{ isAuthenticated ? 'User Dashboard' : 'Authentication' }}</h2>

    <div v-if="isAuthenticated">
      <UserDashboard />
    </div>
    <div v-else>
      <AuthForm @submit="authenticateUser" />
    </div>
  </div>
</template>

<script>
import AuthForm from '../components/AuthForm.vue';
import UserDashboard from './UserDashboard.vue';

export default {
  components: {
    AuthForm,
    UserDashboard,
  },
  data() {
    return {
      isAuthenticated: false,
    };
  },
  methods: {
    authenticateUser(formData) {
      console.log('Form data submitted:', formData);
      this.isAuthenticated = true;
    },
  },
};
</script>

<style scoped>
</style>
