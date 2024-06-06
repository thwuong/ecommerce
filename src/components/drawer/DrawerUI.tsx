import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Placement } from "@chakra-ui/react";
import React from "react";
interface DrawerUIProps extends React.HTMLAttributes<HTMLElement> {
    isOpen: boolean;
    onClose: () => void;
    placement?: any;
}
function DrawerUI(props: DrawerUIProps) {
    const { isOpen, onClose, children, placement = "right" } = props;
    return (
        <Drawer isOpen={isOpen} placement={placement} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>{children}</DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerUI;
