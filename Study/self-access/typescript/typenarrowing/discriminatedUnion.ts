// 식별할 수 있는 유니온 (= tagged union)
// JS가  덕 타이핑 언어이므로 별도의 타입 에러를 뱉지 않음  ->  의미를 알 수 없는 무수한 에러 객체가 생겨날 위험성 증가
// 에러 타입의 구분을 위해 (타입 간의 구조 호환을 막기 위해) 타입마다 구분할 수 있는 판별자를 달아주어야 함 -> 포함관계 제거

type TextError = {
  errorType: "TEXT";
  errorCode: string;
  errorMessage: string;
};

type ToastError = {
  errorType: "TOAST";
  errorCode: string;
  errorMessage: string;
  toastShowDuration: number; // 토스트를 띄우는 시간
};

type AlertError = {
  errorType: "ALERT";
  errorCode: string;
  errorMessage: string;
  onConfirm: () => void; // 확인 버튼을 눌렀을 때 실행할 함수
};

type ErrorType = TextError | ToastError | AlertError;
const errorObj: ErrorType[] = [
  { errorType: "TEXT", errorCode: "101", errorMessage: "텍스트 에러" },
  {
    errorType: "TOAST",
    errorCode: "301",
    errorMessage: "토스트 에러",
    toastShowDuration: 5000,
  },
  {
    errorType: "ALERT",
    errorCode: "401",
    errorMessage: "알림 에러",
    onConfirm: () => {},
  },
  {
    errorType: "TEXT",
    errorCode: "777",
    errorMessage: "올바르지 않은 에러",
    toastShowDuration: 6000,
    onConfirm: () => {},
  },
  {
    errorType: "TOAST",
    errorCode: "888",
    errorMessage: "올바르지 않은 에러",
    onConfirm: () => {},
  },
  {
    errorType: "ALERT",
    errorCode: "999",
    errorMessage: "올바르지 않은 에러",
    toastShowDuration: 7000,
  },
];
