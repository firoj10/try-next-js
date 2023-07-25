import React from 'react';
import Sidebar from './Sidebar';

const DashboarLayout = ({children}) => {
    return (
        <div className='flex container mx-auto'>
          <Sidebar></Sidebar>
           {children} 
        </div>
    );
};

export default DashboarLayout;