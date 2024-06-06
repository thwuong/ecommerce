const REGEX = {
    EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    PHONE: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
    NUMBER: /^[0-9][A-Za-z0-9 -]*$/g,
};

export const validMail = (data: string, required = false) => {
    if (required && data.trim().length <= 0) {
        return false;
    }
    if (!REGEX.EMAIL.test(data)) {
        return false;
    }
    return true;
};
export const validPhoneNumber = (data: string, required = false) => {
    if (required && data.trim().length <= 0) {
        return false;
    }
    if (!REGEX.PHONE.test(data)) {
        return false;
    }
    return true;
};
export const validNumber = (data: string, required = false) => {
    if (required && data.trim().length <= 0) {
        return false;
    }
    if (!REGEX.NUMBER.test(data)) {
        return false;
    }
    return true;
};
