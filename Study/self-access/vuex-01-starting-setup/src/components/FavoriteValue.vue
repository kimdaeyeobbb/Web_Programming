<template>
  <h3>{{ counter }}</h3>
  <p>We do more !</p>
</template>
<script>
export default {
  data() {
    // html,js에서 전역 변수로 사용할 변수 선언
    return {
      sampleData: '',
    };
  },
  computed: {
    counter() {
      //   return this.$store.state.counter * 2;
      //   return this.$store.getters.finalCounter;
      return this.$store.getters.normalizedCounter;
    },
  },
};
</script>

<style scoped></style>
