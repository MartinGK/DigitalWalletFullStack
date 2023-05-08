import React from 'react';

interface IInfoCard {
  children: React.ReactNode;
}

const InfoCard: React.FC<IInfoCard> = ({ children }) => {
  return (
    <div className="bg-gray-300 border-gray-400 border min-h-[5rem] rounded border-solid min-w-[18rem]">{children}</div>
  );
};

export default InfoCard;