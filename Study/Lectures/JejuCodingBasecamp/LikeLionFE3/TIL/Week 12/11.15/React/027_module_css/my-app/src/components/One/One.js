import React from 'react'
// import './one.css'
// import './one.module.css'
import styles from './one.module.css'

export default function One() {
    return (
        <section>
            <h2>ONE- hello world</h2>
            {/* <p className='contents'>hello world</p> */}
            <p className={styles.contents}>hello world</p>
        </section>
    );
}
