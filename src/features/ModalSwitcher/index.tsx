import React from "react";
import { UserInfo } from "../UserInfo";
import { useStores } from "../../shared/hooks/stores";
import { OpenedModal, ModalComponent } from "../../app/stores/modals";
import { observer } from "mobx-react-lite";
import { Modal } from "antd";

export const ModalSwitcher = observer(() => {
  const {
    modals: { modalQueue, closeModal },
  } = useStores();

  console.log("modalqueue");

  const modal: ModalComponent = {
    UserInfo,
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
      <Modal onCancel={handleClose} open={true}>
        <OpenedModal data={data} onClose={handleClose} />
      </Modal>
    </>
  );
});
