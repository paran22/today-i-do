import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import useAuthState from "./hooks/useAuthState";
import useGoogleAuth from "./hooks/useGoogleAuth";
import useScroll from "./hooks/useScroll";

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

  const ref = useRef<HTMLElement>(null);
  const { setBodyElement } = useScroll();
  useEffect(() => {
    if (ref.current) setBodyElement(ref.current);
  }, [setBodyElement]);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <section ref={ref} className="pt-12 pb-6">
        <Outlet />
      </section>
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
