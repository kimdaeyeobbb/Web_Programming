// 문자열 리터럴 타입 선언
type Stage = "init" | "loading" | "success" | "error";
type StageName = `${Stage} stage`;

const stage1: StageName = "init stage";
const stage2: StageName = "zzz stage"; // 에러
