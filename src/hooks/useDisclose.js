import { useState } from "react";

const useDisclouse = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  }
  const onClose = () => {
    setIsOpen(false);
  }

  return (onOpen, onclose, isOpen)
}

export default useDisclouse