'use client'

import { ThemeProvider } from "next-themes";

const CustomThemeProvider = ({ children }) => {
  return (
    <div className="transition-all delay-300">
      <ThemeProvider defaultTheme="system" attribute="class">
        {children}
      </ThemeProvider>
    </div>
  );
};

export default CustomThemeProvider;
