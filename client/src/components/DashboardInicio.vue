<template>
  <div class="Inicio">
    <h1>Este es la vista principal</h1>
    {{ this.userName }}
    {{ userinfo }}
    {{ $store.state.userdata }}
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "asdsdd",
    };
  },
  computed: {
    userinfo() {
      return this.$store.state.userdata;
    },
  },
};
</script>
