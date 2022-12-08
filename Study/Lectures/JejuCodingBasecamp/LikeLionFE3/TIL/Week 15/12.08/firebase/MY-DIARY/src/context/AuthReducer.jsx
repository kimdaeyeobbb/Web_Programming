export const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload };
    case 'logout':
      return { ...state, user: null };
    case 'authIsReady':
      return { ...state, user: action.payload, isAuthReady: true };
    default:
      return state; // 초기값이 null이기 때문에 null이 반환됨
  }
};
