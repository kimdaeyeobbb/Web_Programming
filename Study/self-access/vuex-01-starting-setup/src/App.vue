<template>
  <base-container title="Vuex">
    <h3>0</h3>
    <!-- vuex 저장소를 가리키는 $store 프로퍼티 -->
    <!-- 저장소에서 관리하는 상태를 가리키는 state 프로퍼티를 가짐 -->
    <h4>{{ $store.state }}</h4>

    <!-- store가 관리하는 counter에 접근 -->
    <h5>{{ $store.state.counter }}</h5>
    <h3>{{ counter }}</h3>
    더카운터: <TheCounter></TheCounter>
    <hr />
    <FavoriteValue></FavoriteValue>
    <hr />
    <button @click="addOne">Add 10</button>
    <br />
    체인지 카운터: <ChangeCounter></ChangeCounter>
  </base-container>
  <br />
  <BaseContainer title="Auth">
    <UserAuth></UserAuth>
  </BaseContainer>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    addOne() {
      // this.$store.state.counter++;
      // this.$store.commit('increment');
      // this.$store.commit('increase', { value: 10 });

      // this.$store.commit({
      //   type: 'increase',
      //   value: 10,
      // });

      /* actions를 이용  */
      this.$store.dispatch({
        // dispatch -> commit과 유사. 두개의 인수를 dispatch할 수 있음
        type: 'increase', // 첫번째 인수: actions 이름
        value: 10, // 두번째 인수: 잠재적인 payload
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
