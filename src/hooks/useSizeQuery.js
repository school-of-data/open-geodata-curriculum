import { useState, useEffect } from "react";

function useSizeQuery() {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        const media = window.matchMedia("(min-width: 960px)");
        const listener = () => setIsDesktop(media.matches);
        listener();
        window.addEventListener("resize", listener);
        return () => window.removeEventListener("resize", listener);
    }, [isDesktop]);

    return { isDesktop }
}

export default useSizeQuery;
