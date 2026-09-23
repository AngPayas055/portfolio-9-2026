import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { 
  title: "Jhon Rey Mendiola | Full-stack Developer", 
  description: "Portfolio of Jhon Rey Mendiola, a full-stack developer based in Tacloban City, Philippines.", 
  icons: { icon: "/favicon.svg" } 
};
export default function RootLayout({ children }: { children: React.ReactNode }) { 
  return <html lang="en">
          <body>{children}</body>
        </html> }
