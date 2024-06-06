import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import React from "react";
interface DrawerUIProps extends React.HTMLAttributes<HTMLElement> {
    isOpen: boolean;
    onClose: () => void;
    placement?: any;
    size?: string;
    headerNode?: React.ReactNode;
}
function DrawerUI(props: DrawerUIProps) {
    const { isOpen, onClose, children, placement = "right", size = "md", headerNode } = props;
    return (
        <Drawer isOpen={isOpen} placement={placement} onClose={onClose} size={size}>
            <DrawerOverlay />
            <DrawerContent bg={"black"}>
                <DrawerHeader px={"0"} className="bg-typo-secondary/80">
                    <DrawerCloseButton color={"white"} left={2} top={3} />
                    {headerNode}
                </DrawerHeader>
                <DrawerBody padding={"0"}>{children}</DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default DrawerUI;
