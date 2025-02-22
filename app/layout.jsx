import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { Geist, Playfair_Display_SC } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import "./tailwind.css"
import {Avatar} from "@heroui/avatar";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });


const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

import React from "react";

const App = () => {
  return (
    <html>
       <body className=" h-screen bg-green-900  w-full md:flex-row  flex  items-center justify-start">
        <p className="divider absolute bg-black p-1 flex items-center justify-center playfair-display text-white bottom-0 w-full">
          This Project is under building by the BCA students -BIHER
        </p>
      <div className="  text-md flex p-4 flex-col justify-center sm:flex-row h-full w-full  ">
        <div className="img h-28  bg-green-100"></div>


           <div className={`left flex flex-col items-start justify-start playfair-display `} >
                <h1 className="font-black  text-yellow-100 text-6xl md:py-8 md:text-8xl py-4">
          Eatgood
                </h1>
                 <h4 className= "  font-black text-yellow-100 md:text-3xl playfair-display md:w-1/2" >
          Get your basic human right with us!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis, dolores facere tenetur repudiandae repellat ipsum asperiores accusantium quis inventore.
                   </h4>
        </div>
      </div>
       </body> </html>
  );
};

export default App;

