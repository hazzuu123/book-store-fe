import { useCallback, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
const Modal = ({ children, isOpen, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);
  return (
    <>
      {isOpen && (
        <ModalStyle onClick={handleOverlayClick}>
          <div className="modal-body" ref={modalRef}>
            <div className="modal-contents">{children}</div>
            <div className="modal-close" onClick={handleClose}>
              <FaPlus />
            </div>
          </div>
        </ModalStyle>
      )}
    </>
  );
};

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);

  .modal-body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: #fff;
    max-width: 80%;
    padding: 56px 32px 32px;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    box-shadow: 0 0 29px rgba(0, 0, 0, 0.5);

    img {
      width: 100%;
    }
  }
  .modal-close {
    border: none;
    background-color: transparent;
    cursor: pointer;

    position: absolute;
    top: 0;
    right: 0;
    padding: 12px;

    svg {
      width: 20px;
      height: 20px;
      transform: rotate(45deg);
    }
  }
`;
export default Modal;
