import { User } from "firebase/auth";
import { useRecoilState } from "recoil";
import { userState } from "../state/userState";

export type AuthUser = User | null;

export default function useAuthState() {
  const [user, setUser] = useRecoilState(userState);
  const setAuthUser = (user: AuthUser) => setUser(user);
  const isLogin = user !== null;
  const isLoading = user === undefined;
  return { setAuthUser, isLogin, user, isLoading };
}
