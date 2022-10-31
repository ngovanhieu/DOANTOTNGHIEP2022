import { useState } from "react";
import { RingLoader } from 'react-spinners';

export const Spinner = () => {


  return (
    <div className='sweet-loading'>
        <RingLoader
          color={'#123abc'} 
          loading={true} 
        />
      </div>
  );
};
