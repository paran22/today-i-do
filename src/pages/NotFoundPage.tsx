import { AiTwotoneNotification } from "react-icons/ai";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-4 pt-36 ">
        <AiTwotoneNotification className="text-6xl" />
        <p className="text-3xl font-bold">잘못된 경로입니다.</p>
      </div>
      <Footer />
    </>
  );
}
