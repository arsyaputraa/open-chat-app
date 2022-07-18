import { auth } from '../config/firebaseConfig';

const SignOut = () => {
  return (
    <button
      onClick={() => {
        auth.signOut();
      }}
      className="text-red-400 rounded-md"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
