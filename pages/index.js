import ChatRoom from '../components/ChatRoom';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './../config/firebaseConfig';
import SignIn from '../components/SignIn';

export default function Home() {
  const [user] = useAuthState(auth);
  return (
    <main className="text-white min-h-screen bg-black flex flex-col justify-center items-center">
      {user ? <ChatRoom user={user} /> : <SignIn />}
    </main>
  );
}
