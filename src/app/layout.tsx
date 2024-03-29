import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
