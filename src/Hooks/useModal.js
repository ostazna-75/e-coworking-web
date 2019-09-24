import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }
  function show() {
    setIsShowing(true);
  }
  function hide() {
    setIsShowing(false);
  }

  return {
    isShowing,
    toggle,
    show,
    hide
  };
};

export default useModal;
