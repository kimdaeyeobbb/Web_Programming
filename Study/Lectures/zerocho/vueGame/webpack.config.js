const { VueLoaderPlugin } = require("vue-loader"); // vue loader plugin을 넣어줌
const path = require("path"); // node 환경에서는 require로 불러옴

/* 노드의 모듈 */
module.exports = {
  mode: "development", // 개발모드. (배포용은 production)
  devtool: "eval", // eval: 개발용. (웹팩이 빌드하는 속도가 빨라짐)  배포할떄에는 hidden-source-map

  resolve: {
    extensions: [".js", ".vue"],
  },

  /* 웹팩  */
  /* 웹팩은 수많은 스크립트를(대표: entry) 하나로 합치기 위해 사용함 */
  entry: {
    // app: 하나로 합쳐질 파일 이름
    app: path.join(__dirname, "main.js"),
  },

  /* module: 웹팩의 핵심. 자바스크립트 파일 합치는법을 명시 */
  // 웹팩은 기본적으로 자바스크립트 파일만 처리하는데, rules에 vue를 명시하였으므로
  // vue 파일을 만났을 때, template 등을 처리하는 vue-loader가 처리하도록 함.
  module: {
    /* 기본뼈대인 entry에서 시작하여 희한한 것을 만나면 module의 rules가 대신 처리해줌 */
    rules: [
      {
        test: /\.vue$/, // 얘가없으면 자바스크립트 파일이 아니므로 에러발생. 파일명이 .vue로 끝나는 파일을 자바스크립트 파일로..
        loader: "vue-loader", // loader대신 use로 써도됨. use 대신 loader로 써도 됨
        // npm i vue-loader와 npm i vue-loader -D 명령어로 vue-loader 설치
        // myPage.vue 등의 파일을 webpack이 아니라 vue-loader가 처리함
      },
    ],
  },
  /* output 나오기 전에 plugins들이 후처리 및 가공 */
  plugins: [
    new VueLoaderPlugin(), // vue loader plugin을 넣어줌
  ],

  /* 최종결과물 */
  output: {
    // main.js에서 꼬리를 물고 연결된 파일들이 output으로 output/app.js로 합쳐짐
    filename: "[name].js", // main.js로 써도 됨
    path: path.join(__dirname, "dist"),
    //path: "./dist", // dist: 최종 결과물로 나올 결과물 경로

    //path: "./output", // output: 최종 결과물로 나올 결과물 경로
  },
};
