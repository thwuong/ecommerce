"use client";
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
    name: string;
};

function ContactForm() {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>();

    function onSubmit(values: FormValues) {
        console.log(values);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.name}>
                <FormLabel htmlFor="name">First name</FormLabel>
                <Input
                    id="name"
                    placeholder="name"
                    {...register("name", {
                        validate: () => {
                            return "valid name";
                        },
                    })}
                />
                <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
            </FormControl>
            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                Submit
            </Button>
        </form>
    );
}

export default ContactForm;
