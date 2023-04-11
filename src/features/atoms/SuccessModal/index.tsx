/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Modal from 'react-modal';
import styles from './SuccessModal.module.scss';
import CloseIcon from '../../../components/svgs/CloseIcon';
import Text from '../text';
import CheckWithShadowIcon from '../../../components/svgs/CheckWithShadowIcon';
import Button from '../../../components/multiusable/button/Button';

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
        contentLabel="Example Modal"
        className={styles.modalWrapper}
        overlayClassName={styles.modalOverlay}
      >
        <button className={styles.closeIcon} onClick={closeModal}>
          <CloseIcon />
        </button>
        <div className={styles.modalBody}>
          <Text className={styles.modalTitle} as="h3">
            SUCCESS
          </Text>
          <Text className={styles.modalSubTitle} as="p">
            Hit a line and our friendly folks will get back to you as soon as possible.
          </Text>
          <div>
            <CheckWithShadowIcon />
          </div>
          <Button type="button" children="Back To home" />
        </div>
      </Modal>
    </div>
  );
};

export default React.memo(SuccessModal);
