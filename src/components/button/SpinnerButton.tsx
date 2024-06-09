import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

function SpinnerButton() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
        max: 6,
    });

    const inc = getIncrementButtonProps();
    const dec = getDecrementButtonProps();
    const input = getInputProps();

    return (
        <HStack maxW="144px" className="border border-gray-300 rounded-2xl py-2 px-3">
            <Button {...dec}>-</Button>
            <Input {...input} variant="unstyled" className="text-center px-2" />
            <Button {...inc}>+</Button>
        </HStack>
    );
}

export default SpinnerButton;
