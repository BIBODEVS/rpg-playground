import { makeAutoObservable } from "mobx";
import { RootStore } from "./index";
import { FC } from "react";
import { UserInfoProps } from "../../features/UserInfo";
import { InitiativeProps } from "../../features/Initiative";

export interface ModalData<ContentProps> {
  data: ContentProps;
  onClose: () => void;
}

export interface ModalComponent {
  UserInfo: FC<ModalData<UserInfoProps>>;
  Initiative: FC<ModalData<InitiativeProps>>;
}

export interface ModalComponentProps {
  UserInfo: UserInfoProps;
  Initiative: InitiativeProps;
}

export type ModalSettings = {
  size: "auto" | "l";
};

export interface OpenedModal {
  name: keyof ModalComponent;
  data?: ModalComponentProps[keyof ModalComponent];
  settings?: ModalSettings;
}

export class Modals {
  constructor(public root: RootStore) {
    makeAutoObservable(this);
  }
  modalQueue: OpenedModal[] = [];
  openModal = (openedModal: OpenedModal) => {
    this.modalQueue.push(openedModal);
  };
  closeModal = (closedModalName: string) => {
    this.modalQueue = this.modalQueue.filter(
      (modal) => modal.name !== closedModalName
    );
  };
}
