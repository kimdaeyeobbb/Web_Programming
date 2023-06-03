import Vue from "vue"; // 설치한 vue를 가져옴. package.json에 명시한 vue를 가져오겠다는 것
import myPage from "./myPage.vue";

new Vue(myPage).$mount("#root"); // 뷰 인스턴스.
// myPage -> 메인 컴포넌트라서 뷰 인스턴스에 연결해줌
