import React, { useState, useEffect } from 'react';

export const Notification = ({ message, isVisible }) => {
    const [visble, setVisible] = useState(isVisible);

    useEffect(() => {
      if(isVisible) {
        setVisible(true);
      }

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);
    
      return () => {
        clearTimeout(timer);
      };
    }, [isVisible]);
    
  
    return (
      visble ? <div className='notification'>{message}</div> : null
    );
};