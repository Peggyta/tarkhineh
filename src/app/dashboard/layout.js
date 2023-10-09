import React from 'react';
import DashboardSidebar from '@/components/layout/DashboardSidebar';

const DashboardLayout = ({children}) => {
    return (
        <div>
            <DashboardSidebar>
                {children}
            </DashboardSidebar>     
        </div>
    );
};

export default DashboardLayout;