import useRoute from "../../hooks/useRoute";
import useGoogleAuth from "../../hooks/useGoogleAuth";
import useAuthState from "../../hooks/useAuthState";
import NavBarItem from "./NavBarItem";

export default function NavBar() {
  const { navigateToLogin, navigateToWriteBoard } = useRoute();
  const { isLogin } = useAuthState();
  const { signOutWithGoogle } = useGoogleAuth();
  return (
    <div>
      <NavBarItem name="작성하기" onClick={navigateToWriteBoard} />
      {isLogin ? (
        <NavBarItem name="로그아웃" onClick={signOutWithGoogle} />
      ) : (
        <NavBarItem name="로그인" onClick={navigateToLogin} />
      )}
    </div>
  );
}
