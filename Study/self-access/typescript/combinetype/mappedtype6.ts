// 사용자 프로필 조회 API
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

function fetchUserProfile(): UserProfile {}

// 사용자 프로필 정보 수정 API
interface UserProfileUpdate {
  username?: string;
  email?: string;
  profilePhotoUrl?: string;
}

function updateUserProfile(update: UserProfileUpdate) {}

// 상기 인터페이스 반복 구조 재활용
type UserProfileSubset = {
  [K in keyof UserProfile]?: UserProfile[K];
};
