import React from 'react'
// import './two.css'
// import './two.module.css'
import './two.module.css'
import styles from './two.module.css'

export default function Two() {
    return (
        <section>
            <h2>hello world</h2>
            {/* <p className='contents'>hello world</p> */}
            <p className={styles.contents}>hello world</p>
        </section>
    )
}