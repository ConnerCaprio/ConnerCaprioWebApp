// useModal.tsx

import { useState } from "react";

export default function useModal() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    console.log("hit toggle method");
    setisOpen(!isOpen);
  };

  return {
    isOpen,
    toggle
  };
}
