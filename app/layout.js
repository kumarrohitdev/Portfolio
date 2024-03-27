import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Provider from "@/app/Provider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "portfolio",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
