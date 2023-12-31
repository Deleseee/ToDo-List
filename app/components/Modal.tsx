import React, { Children } from 'react'

interface ModalProps{
    modalOpen: boolean;
    setModalOpen: (open: boolean) => boolean | void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen,children}) => {
  return (
    <div className={`modal ${modalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
            {children}
            <br/>
            <label onClick={() => setModalOpen(false)} className="btn">Close!</label>
        </div>
    </div>
  )
}

export default Modal