module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'no-unused-vars': 'warn', // 하이픈이 있으면 따옴표를 걸어줘야 함. 하이픈 없을 경우에는 따옴표 걸 필요X
    'prettier/prettier': 'error',
    'no-console': 'off', // 해당 옵션 안쓸 경우에 off로 설정
    'func-names': 'off', // 화살표 함수 쓸 때 이름을 잘 안쓰는데, 그런 경우 에러를 내보내지 않겠다는 뜻
    'object-shorthand': 'off',
    'class-methods-use-this': 'off', // this를 사용하지 않는 클래스의 메서드는 끄겠다는 뜻
  },
};
