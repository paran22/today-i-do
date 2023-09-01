import React from "react";
import NavBarItem from "./NavBarItem";
import useRoute from "../hooks/useRoute";

export default function NavBar() {
  const { navigateToLogin, navigateToWriteBoard } = useRoute();
  return (
    <div>
      <NavBarItem name="작성하기" onClick={navigateToWriteBoard} />
      <NavBarItem name="로그인" onClick={navigateToLogin} />
    </div>
  );
}
