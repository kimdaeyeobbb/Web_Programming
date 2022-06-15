document.addEventListener('DOMContentLoaded', () => {
  console.log("document's ready");

  for (var i = 0; i < 5; i += 1) {
    console.log(
      '🚀 ~ file: index2.js ~ line 5 ~ document.addEventListener ~ i',
      i
    );
    document.getElementById('span$(i+1)').addEventListener('click', () => {
      console.log(i + 1);
    });
  }
});
