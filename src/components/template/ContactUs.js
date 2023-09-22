import React from 'react';
import BranchCard from '../module/contactUs/BranchCard';
import styles from '../../styles/ContactUs.module.css';

const ContactUs = ({showBranches}) => {
    
   
    return (
        <div>
             <div className={styles.contactBanner}>
                <h2 className='h-full text-white font-bold flex items-center text-2xl sm:text-4.5xl justify-center'>
                   با ترخینه در تماس باشید.
                </h2>
            </div>
         {showBranches.map((item)=> {
            return (
                <BranchCard key={item._id} {...item} />
            )
         })}
        </div>
    );
};

export default ContactUs;