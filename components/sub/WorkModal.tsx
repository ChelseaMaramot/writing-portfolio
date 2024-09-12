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
        <Modal size="md" scrollBehavior="inside" isOpen={isModalOpen} onClose={onModalClose} className="flex items-center m-10 py-10 px-5 bg-[#25EEFA]">
            <ModalContent className="text-black">
                <ModalHeader className="flex flex-col gap-1 my-5 text-xl font-bold">{poem.title}</ModalHeader>
                <ModalBody className="p-1 whitespace-pre-wrap">{poem.content}</ModalBody>
                <ModalFooter>
                    <Button className="bg-blue-500 hover: bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onPress={onModalClose}>
                    Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </div>
  );
}
