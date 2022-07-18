import Image from 'next/image';
import React from 'react';

const SentMsg = ({ message }) => {
  return (
    <div className="self-end w-fit pr-3">
      <p className="text-gray-600 text-end">
        {message.displayName && message.email ? message.displayName : 'Unknown'}
      </p>
      <div className="flex gap-2 justify-end">
        <div className="text-black p-2 bg-green-300 rounded-xl rounded-tr-none">
          <p>{message.text}</p>
        </div>
        <div className="rounded-full flex justify-center items-center overflow-hidden">
          <Image src={message.photoURL} width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default SentMsg;
