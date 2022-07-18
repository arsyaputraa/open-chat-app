import Image from 'next/image';

const ReceivedMsg = ({ message }) => {
  return (
    <div className="self-start w-fit pl-3">
      <p className="text-gray-600 text-start">
        {message.displayName && message.email ? message.displayName : 'Unknown'}
      </p>
      <div className="flex gap-2 justify-start">
        <div className="rounded-full flex justify-center items-center overflow-hidden">
          <Image src={message.photoURL} width={40} height={40} />
        </div>
        <div className="text-black p-2 bg-green-300 rounded-xl rounded-tl-none">
          <p>{message.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMsg;
