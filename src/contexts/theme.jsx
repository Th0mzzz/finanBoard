import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
ThemeContext.displayName = "theme";

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    const [scroll, setScroll] = useState(window.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark-mode", theme === "dark");
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, scroll, setScroll}}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => {
    const { theme, setTheme, scroll, setScroll } = useContext(ThemeContext);

    function toggleTheme() {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }



    return { theme, toggleTheme, scroll, setScroll };
};
