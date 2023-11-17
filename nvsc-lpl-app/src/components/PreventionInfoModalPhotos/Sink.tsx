import React from 'react';
import sink from '../../assets/kriaukle.svg';

export const Sink: React.FC = () => {
  return (
    <>
      <div className="imagePlaceHolder">
        <img src={sink} alt="Icon Description" className="modalImage"/>
      </div>
    </>
  );
};