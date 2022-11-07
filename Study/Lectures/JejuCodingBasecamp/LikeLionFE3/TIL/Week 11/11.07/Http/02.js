fetch('http://146.56.183.55:5050/user', {
  method: 'GET'
})
.then((response) => response.json())
.then((data) => {
  console.log('성공:', data);
})
.catch((error) => {
  console.error('실패:', error);
});