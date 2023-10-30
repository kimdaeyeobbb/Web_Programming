<template>
  <button>Login</button>
  <button>Logout</button>
</template>
<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
export default {
  name: '', // 컴포넌트명
  components: {}, // 외부 컴포넌트 사용시 import후 배열로 등록
  setup() {
    // Composition API
    const sampleData = ref('');
    /* Lifecycle Hooks */
    onBeforeMount(() => {
      // BeforeMount Hook
    });

    onMounted(() => {
      // Mounted Hook
    });

    onBeforeUpdate(() => {
      // Before Update Hook
    });

    onUpdated(() => {
      // Updated Hook
    });

    onBeforeUnmount(() => {
      // Before Unmount Hook
    });

    onUnmounted(() => {
      // unmounted Hook
    });

    /* methods */
    const someMethod = () => {
      // Method Logic
    };

    return {
      sampleData,
      someMethod,
    };
  },
};
</script>

<style scoped></style>
