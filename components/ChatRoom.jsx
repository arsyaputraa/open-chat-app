import { useRef, useState } from 'react';
import ReceivedMsg from './ReceivedMsg';
import SentMsg from './SentMsg';
import SignOut from './SignOut';
import { database, auth } from './../config/firebaseConfig';
import {
  collection,
  query,
  orderBy,
  limit,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function ChatRoom({ user }) {
  const [msgText, setMsgText] = useState('');
  const messageRef = collection(database, 'messages');
  const messageQuery = query(messageRef, orderBy('createdAt'), limit(25));
  const [messages] = useCollectionData(messageQuery, { idField: 'id' });

  const messageClassifier = (uid) => {
    // if sender uid == current user uid then sending message
    return uid === auth.currentUser.uid;
  };

  const sendMessage = async () => {
    if (msgText !== ('' && null && undefined)) {
      const { uid, photoURL, displayName, email } = auth.currentUser;
      await addDoc(messageRef, {
        text: msgText,
        uid: uid,
        photoURL: photoURL,
        createdAt: serverTimestamp(),
        displayName: displayName,
        email: email,
      });
      setMsgText('');
      anchorDown.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // make the chatroom otomatically go down
  const anchorDown = useRef();

  return (
    <div className="relative flex flex-col items-center w-full ">
      <div className="w-full bg-gray-900 h-16  p-3 flex justify-end fixed left-0 top-0 z-10">
        <SignOut />
      </div>
      <div className="relative bg-white h-screen flex flex-col w-full space-y-4">
        {messages &&
          messages.map((msg) =>
            messageClassifier(msg.uid) ? (
              <SentMsg key={msg.id} message={msg} />
            ) : (
              <ReceivedMsg key={msg.id} message={msg} />
            )
          )}

        <div ref={anchorDown}>
          <br />
          <br />
        </div>

        <div className="h-12 fixed z-10 bottom-0 left-0 w-full flex items-center">
          <input
            type="text"
            value={msgText}
            onChange={(e) => {
              setMsgText(e.target.value);
            }}
            placeholder="write some message"
            className="bg-gray-100 p-3 h-full w-full text-black"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 h-full p-2 w-4/12"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
