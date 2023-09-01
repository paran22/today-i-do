import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import useAuthState from "./hooks/useAuthState";
import useGoogleAuth from "./hooks/useGoogleAuth";

function App() {
  const { setAuthUser } = useAuthState();
  const { onUserStateChange } = useGoogleAuth();
  useEffect(
    () =>
      onUserStateChange((user) => {
        setAuthUser(user);
      }),
    [onUserStateChange, setAuthUser]
  );
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
