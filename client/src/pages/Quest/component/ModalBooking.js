import React from "react";

function ModalBooking({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 right-0 bottom-0 text-center bg-[#3D3333] opacity-[96%] z-10 flex justify-center items-center"
    >
      <div className="relative">fdsfdsfsd</div>
    </div>
  );
}

export default ModalBooking;
