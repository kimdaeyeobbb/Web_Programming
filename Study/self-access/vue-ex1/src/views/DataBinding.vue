<template>
  <div>Hello, {{ title }}</div>
</template>
<script>
export default {
  components: {}, // 외부 컴포넌트 사용시 import후 배열로 등록
  data() {
    // html,js에서 전역 변수로 사용할 변수 선언
    return {
      title: "맨유",
    };
  },
  setup() {}, // Composition API
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
};
</script>

<style scoped></style>
