import React from "react";

function useStickyHeader() {
    const [sticky, setSticky] = React.useState(false);
    const handlerScroll = () => {
        if (window.scrollY > 64) {
            return setSticky(true);
        }
        return setSticky(false);
    };
    React.useEffect(() => {
        document.addEventListener("scroll", handlerScroll);

        () => document.removeEventListener("scroll", handlerScroll);
    }, []);

    return [sticky];
}

export default useStickyHeader;
