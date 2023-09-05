import React from "react";
import { ThreeDots } from "react-loader-spinner";

interface LoadingProps {
  visible: boolean;
}

export default function Loading({ visible }: LoadingProps) {
  return (
    <div className="absolute left-1/2 top-1/3 -translate-x-1/2">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        visible={visible}
      />
    </div>
  );
}
