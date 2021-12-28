import { useState } from "react";

interface Login {
  uid: string;
  name: string;
}
const User = () => {
  const [user, setUser] = useState<Login>();
  const login = () => {
    setUser({
      uid: "ABCDEF",
      name: "Chris",
    });
  };
  return (
    <div className="mt-5">
      <h3>User</h3>
      <button onClick={login} className="btn btn-outline-primary">
        Login
      </button>
      {!user ? <pre>No users</pre> : <pre>{JSON.stringify(user)}</pre>}
    </div>
  );
};

export default User;
