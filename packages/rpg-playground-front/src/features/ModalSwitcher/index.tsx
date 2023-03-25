import React from "react";
import { useStores } from "../../shared/hooks/stores";
import { OpenedModal, ModalComponent } from "../../app/stores/modals";
import { observer } from "mobx-react-lite";
import { Modal } from "antd";
import { CharacterInfo } from "../CharacterInfo";
import { Initiative } from "../Initiative";

export const ModalSwitcher = observer(() => {
  const {
    modals: { modalQueue, closeModal },
  } = useStores();

  const modal: ModalComponent = {
    CharacterInfo,
    Initiative,
  };

  const openedModal: OpenedModal | undefined = modalQueue.find(
    (openedModal) => modal[openedModal.name as OpenedModal["name"]]
  );

  if (!openedModal?.name) return null;

  const handleClose = () => {
    closeModal(openedModal?.name);
  };

  const OpenedModal = modal[openedModal.name];
  const data = openedModal.data as any;

  return (
    <>
      <Modal onCancel={handleClose} open={true} footer={null}>
        <OpenedModal data={data} onClose={handleClose} />
      </Modal>
    </>
  );
});
