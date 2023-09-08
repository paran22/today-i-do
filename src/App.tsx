import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import useAuthState from "./hooks/useAuthState";
import useGoogleAuth from "./hooks/useGoogleAuth";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <Header />
      <Outlet />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
