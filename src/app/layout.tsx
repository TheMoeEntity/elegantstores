import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });


export const metadata: Metadata = {
  title: "The Elegant stores",
  description: "luxury! just for you",
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
