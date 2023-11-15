import React from "react";
import styles from '../styles/Loader.module.css';

function Loading() {
    return(
        <div className="h-screen flex justify-center items-center">
            <span className={styles.loader}></span>
        </div>
    )
}

export default Loading;