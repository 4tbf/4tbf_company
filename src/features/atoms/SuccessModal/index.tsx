/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Modal from 'react-modal';

const customStyles: any = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '595px',
    height: '448px',
    background: '#12181F',
    border: '1px solid #FFFFFF',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    position: 'fixed',
    zIndex: 1020,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(18, 24, 31, 0.64)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

interface ISuccessModal {
  modalIsOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}
Modal.setAppElement(typeof window !== 'undefined' && document.getElementById('__next'));

const SuccessModal: React.FC<ISuccessModal> = ({ modalIsOpen, setIsOpen }) => {
  const afterOpenModal = () => {
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};

export default React.memo(SuccessModal);
