<template>
  <div>
    <div>
      <div v-html="htmlString"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      htmlString: '<p style="color:red;">This is red String</p>',
    };
  },
};
</script>

<style scoped></style>
