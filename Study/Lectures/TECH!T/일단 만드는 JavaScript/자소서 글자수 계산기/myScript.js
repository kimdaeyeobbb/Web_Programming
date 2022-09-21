function counter() {
  var content = document.getElementById('jasoseol').value;
  if (content.length > 200) {
    // 200글자 이상인 경우
    content = content.substring(0, 200); // 200글자까지만 자름
    document.getElementById('jasoseol').value = content;
  }
  document.getElementById('count').innerHTML = '(' + content.length + '/200)';
}

counter();
