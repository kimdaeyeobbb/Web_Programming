import { createApp } from 'vue';
import App from './App.vue';
import { createStore } from 'vuex';

const app = createApp(App);
const store = createStore({
  // 저장소는 전체 애플리케이션당 하나만 가짐
  state() {
    // 상태 객체를 반환하는 메서드 (컴포넌트의 data와 유사)
    // 이 객체는 애플리케이션 전체와 관련된 데이터를 보유함
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 5;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    // mutations에 있는 것과 이름을 꼭 같게 만들필요는 없지만 같게해야 직관적으로 보기 좋다.
    increment(context) {
      // vuex가 자동으로 context를 가져옴

      /* actions는 mutations와 달리 비동기를 허용 */
      setTimeout(function () {
        context.commit('increment');
        // context는 호출할 수 있는 commit 메서드가 존재함
        // mutations를 커밋함
      }, 2000);
    },

    increase(context, payload) {
      console.log(context);
      context.commit('increase', payload);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      // 다른 getter에서 계산한것을 또 계산하는 현상을 방지하고자 getters 인자를 추가함
      // 이 두번쨰 인자로 getter를 참조하여 finalCounter를 가져오게 만듦
      // 여기서는 첫번째 인자인 state가 불필요하므로 _로 처리

      // const finalCounter = state.counter * 3;
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    },
  },
});

app.use(store); // app을 저장소에 연결 (app을 호출해서 store 전달)
app.mount('#app');
