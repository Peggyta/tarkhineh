import React from 'react';
import Features from '../module/branching/Features';
import BenefitOfBranching from '../module/branching/BenefitOfBranching';
import styles from '../../styles/Branches.module.css';

const Branches = () => {
    return (
        <div>
            <div className={styles.branchBanner}>
                <h2 className='h-full text-white text-center font-bold flex items-center text-2xl sm:text-4.5xl justify-center'>
                    همین الان به خانواده بزرگ ترخینه بپیوندید!
                </h2>
            </div>
            <Features />
            <BenefitOfBranching />
        </div>
    );
};

export default Branches;