"use client";
import React, { createContext, useState } from "react";

type ThemeContextType = {
    toggle: () => void;
    mode: string;
};

const ThemeContext = createContext<ThemeContextType>({
    toggle: () => {},
    mode: "dark",
});

const ThemeProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`theme ${mode}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export {
    ThemeContext,
    ThemeProvider
};