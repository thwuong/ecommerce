import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalProps,
} from "@chakra-ui/react";
import React from "react";
interface ModalUIProps extends ModalProps {
    title?: string;
    isTitle?: boolean;
}
function ModalUI(props: ModalUIProps) {
    const { children, isOpen, onClose, title = "Modal title", isTitle = false } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                {isTitle && <ModalHeader>{title}</ModalHeader>}
                <ModalCloseButton />
                <ModalBody>{children}</ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ModalUI;
