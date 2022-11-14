import React, { useState } from 'react';

function Resume(props) {
  const [like, setLike] = useState(0);
  /* 방법 1 */
  // let clap = ("" + like).match(/[3|6|9]/g) ? ' 👏' : ''; 

  /* 방법 2 */
  // let clap = ''
  // for (let i of String(like)) {
  //   if (i === '3') {
  //     clap = "짝 👏"
  //   } else if (i === '6') {
  //     clap = "짝 👏"
  //   } else if (i === '9') {
  //     clap = "짝 👏"
  //   }
  // }

  /* 방법 3 */
  // let clap = String(like).match(/[369]/g) ? '짝 👏' : '';

  /* 방법 4 */
  let clap = String(like).split("").filter(v => v === '3' || v === '6' || v === '9').length ? '짝 👏 ' : '';

  function handleClickLike() {
    // setLike(like + 1)
    // console.log(like);
    setLike(like + 1);
  }

  return (
    <div>
      <button onClick={handleClickLike}>like : {like}</button>
      <span>{clap ? clap : ''}</span>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Resume />
    </div>
  );
}

export default App;