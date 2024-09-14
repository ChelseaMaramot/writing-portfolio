import React from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

interface WorkModalProps {
    isModalOpen: boolean;
    onModalClose: () => void;
    poem: {
      src: string;
      title: string;
      content: string;
    };
  }
  

export default function WorkModal({isModalOpen, onModalClose, poem}: WorkModalProps) {
  return (
    <div className="w-full h-full absolute top-0 backdrop-filter backdrop-blur-sm">
        <Modal hideCloseButton={true} size="md" isOpen={isModalOpen} onClose={onModalClose} className="font-serif flex flex-column items-center rounded  mt-10 mx-10 pt-5 px-5 bg-white h-auto min-h-[30vh] max-h-[80vh]">
            <ModalContent className="text-black">
                <ModalHeader className="flex flex-col gap-1 my-5 text-xl font-bold">{poem.title}</ModalHeader>
                <ModalBody className="p-1 whitespace-pre-wrap overflow-y-auto leading-9">{poem.content}</ModalBody>
                <ModalFooter className="m-auto py-5">
                    <Button className="bg-blue-500 hover: bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onPress={onModalClose}>
                    Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
  );
}
