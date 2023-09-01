import { FcGoogle } from "react-icons/fc";
import useGoogleAuth from "../hooks/useGoogleAuth";
import useRoute from "../hooks/useRoute";
import Button from "../components/Button";

export default function LoginPage() {
  const { signInWithGoogle } = useGoogleAuth();
  const { navigateToHome } = useRoute();
  const handleClick = () => {
    signInWithGoogle()
      .then(() => navigateToHome())
      .catch((error) => alert("에러가 발생했습니다."));
  };
  return (
    <section className="flex flex-col gap-10 justify-start pt-20 items-center h-screen">
      <p className="font-bold text-3xl">로그인</p>
      <Button
        icon={<FcGoogle />}
        name="구글로 로그인하기"
        onClick={handleClick}
      />
    </section>
  );
}
