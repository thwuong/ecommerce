import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    ModalProps,
} from "@chakra-ui/react";
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
                <ModalCloseButton onClick={() => onClose()} />
                <ModalBody>{children}</ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default ModalUI;
