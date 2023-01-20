import { getDefaultOwner } from './6-6.js';

const owner = getDefaultOwner();   // 반환된 객체 할당
owner.firstName = '엘리';  // 객체의 메모리 주소값을 가리킴 => 동일한 객체를 수정하게 됨
console.log(owner);
console.log(getDefaultOwner());   // 새로운 객체 받아옴

// 객체를 담고있는 변수는 객체를 가리키고있는 메모리 주소값 (참조값)을 반환함
// 객체는 항상 참조값으로 전달되므로 변경될 수 있는 객체를 여기저기에 사용하는 것은 위험함
