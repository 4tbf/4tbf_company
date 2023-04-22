/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation();

  const router = useRouter();
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
            {t('modal.success.title')}
          </Text>
          <Text className={styles.modalSubTitle} as="p">
            {t('modal.success.decription')}
          </Text>
          <div>
            <CheckWithShadowIcon />
          </div>
          <Button
            type="button"
            children={t('modal.success.back')}
            onClick={() => {
              closeModal();
              router.push('/');
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default React.memo(SuccessModal);
