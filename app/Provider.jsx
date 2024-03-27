'use client'

import { ThemeProvider } from "next-themes";

const CustomThemeProvider = ({ children }) => {
  return (
    <div className="transition-all delay-300">
      <ThemeProvider defaultTheme="dark" attribute="class">
        {children}
      </ThemeProvider>
    </div>
  );
};

export default CustomThemeProvider;
