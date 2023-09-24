import React from 'react';
import styles from '../../styles/Branches.module.css';

const Branches = () => {
    return (
        <div>
            <div className={styles.branchBanner}>
                <h2 className='h-full text-white font-bold flex items-center text-2xl sm:text-4.5xl justify-center'>
                    همین الان به خانواده بزرگ ترخینه بپیوندید!
                </h2>
            </div>
        </div>
    );
};

export default Branches;