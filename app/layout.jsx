import link from "./(auth-pages)/sign-in/page"
import Navbar from "./components/Navbar"
import { DatePicker } from "antd";
import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import "./tailwind.css";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/react";
// Font Setup
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const geistSans = Geist({ display: "swap", subsets: ["latin"] });

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

  export const metadata = {
    metadataBase: new URL(
      process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"
    ),
    title: "Next.js and Supabase Starter Kit",
    description: "The fastest way to build apps with Next.js and Supabase",
  };
  

const App = () => {
  const items = [
    { key: "new", label: "New file" },
    { key: "copy", label: "Copy link" },
    { key: "edit", label: "Edit file" },
    { key: "delete", label: "Delete file" },
  ];

  return (
    <html lang="en">
      <body className="h-screen bg-green-900 w-full flex flex-col md:flex-row items-center justify-start">
        {/* Dropdown Menu */}
        <Navbar></Navbar>

        {/* Footer */}
        <p className="absolute bottom-0 w-full playfair-display bg-black p-1 text-white text-center">
          This Project is under development by BCA students - BIHER
        </p>

        {/* Main Content */}
        <div className="flex flex-col sm:flex-row justify-center h-full items-center p-4 w-full">
          <div className="h-1/3 w-full bg-green-100"></div>

          <div className={`flex flex-col items-start ${playfair.className}`}>
            <h1 className="text-yellow-100 text-6xl md:text-8xl font-black py-4 md:py-8">
              Eatgood
            </h1>
            <h4 className="text-yellow-100 md:text-3xl font-black md:w-1/2">
              Get your basic human right with us! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <Button color="primary" className="hover:bg-green-400 my-6 text-lg  hover:text-yellow-100 hover:border-yellow-100 border text-green-600 bg-yellow-100 border-yellow-100" variant="ghost">
        Get Started
      </Button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default App;
