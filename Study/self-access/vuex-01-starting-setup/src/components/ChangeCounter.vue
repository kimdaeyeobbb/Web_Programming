<template>
  <button @click="inc">increment메서드 사용</button>
  <br />
  <button @click="increase({ value: 10 })">
    increase메서드 사용 (payload를 인자로 전달)
  </button>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: '', // 컴포넌트명
  components: {}, // 외부 컴포넌트 사용시 import후 배열로 등록
  data() {
    // html,js에서 전역 변수로 사용할 변수 선언
    return {
      sampleData: '',
    };
  },
  methods: {
    // addONe() {
    //   //   this.$store.state.counter++;
    //   this.$store.dispatch('increment'); // vuex내장메서드. commit: 수행하고자 하는 메서드를
    // },

    /* addONe 대신 mapActions사용 */
    // ...mapActions(['increment', 'increase']),
    // 이 컴포넌트에서 메서드로 지정하고 싶은 actions명을 정의해서 배열로 삽입
    // 두 action을 모두 이 컴포넌트의 메서드로 매핑
    // 이 메서드들은 mapActions에 의해 생성됨

    /* mapActions 대신 사용 - 배열을 전달하는 대신 객체를 전달 */
    ...mapActions({
      inc: 'increment',
      increase: 'increase',
      // 컴포넌트에 전달하려는 메서드명을 키로 정의
      // 메서드에 매핑되어야하는 action을 key값으로 넣어줌
    }),
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
};
</script>

<style scoped></style>
