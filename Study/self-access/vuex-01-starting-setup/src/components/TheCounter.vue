<template>
  <!-- <h3>{{ counter }}</h3> -->
  <div>
    finalcounter:
    <h3>{{ finalCounter }}</h3>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheCounter', // 컴포넌트명
  components: {}, // 외부 컴포넌트 사용시 import후 배열로 등록
  data() {
    // html,js에서 전역 변수로 사용할 변수 선언
    return {
      sampleData: '',
    };
  },
  computed: {
    // counter() {
    //   // return this.$store.state.counter;

    //   return this.$store.getters.finalCounter;
    //   // state가 아닌 $store.getters에 접근
    //   // 여기서는 finalCounter를 호출하거나 실행하는게 아니라 그저 프로퍼티를 가리킬 뿐임
    //   // vuex가 getter 메서드를 실행시키고 현재 state를 getter에 전달함
    // },

    /* counter() 대신 mapGetters 사용 */
    ...mapGetters(['finalCounter']),
    // 컴포넌트에서 finalCounter 연산 프로퍼티를 제공하며 자동으로 finalCounter getter를 가리킴
    // finalCounter는 computed property명임
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
