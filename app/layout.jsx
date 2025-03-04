import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Variable, Weight } from "lucide-react";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const JetBrainsMono = JetBrains_Mono({
 
  subsets: ["latin"],
  Weight: ["100,","200","300", "400", "500","600", "700", "800"],
  Variable: '--font-JetBrainsMono'
});

export const metadata = {
  title: "Portfolio",
  description: "Shubham Kumar Vishwakarma portfolio",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={JetBrainsMono.Variable}>
          <Header/>
          <StairTransition/>
          <PageTransition>
            {children}
          </PageTransition>
      </body>
    </html>
  );
}
