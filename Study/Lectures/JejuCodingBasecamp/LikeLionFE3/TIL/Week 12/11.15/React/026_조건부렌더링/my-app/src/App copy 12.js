import React from "react";
// import './app.css'
import styles from './app.module.css'
import Test from './Components/Test'


function App() {
  return (
    <>
      <h1>hello world</h1>
      <p className={styles.one}>Lorem impsum</p>
      <Test />
      <Test />
    </>
  )
}

export default App;