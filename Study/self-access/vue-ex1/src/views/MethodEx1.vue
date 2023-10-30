<template>
  <div>
    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p>1+1: {{ 1 + 1 }}</p>
      <p>{{ outputGoal() }}</p>
      <p v-html="htmlStr"></p>
    </section>
  </div>
</template>
<script>
export default {
  components: {}, // 외부 컴포넌트 사용시 import후 배열로 등록
  data() {
    // html,js에서 전역 변수로 사용할 변수 선언
    return {
      courseGoalA: "목표A!",
      courseGoalB: "목표B!",
      htmlStr: "<h3>h3태그를 이용한 글씨</h3>",
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
  methods: {
    outputGoal() {
      const randNum = Math.random();
      console.log(randNum);
      if (randNum < 0.5) {
        return this.courseGoalA;
        // return "0.5미만입니다.";
      } else {
        return this.courseGoalB;
        // return "0.5이상 1미만 입니다.";
      }
    },
  },
};
</script>

<style scoped></style>
