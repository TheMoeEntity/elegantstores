import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import AppLayout from "../components/AppLayout";
import { readUserSession } from "../Helpers/supabase";
import { Helpers } from "../Helpers";
import { ISBProducts } from "../Helpers/types";
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Elegant stores",
  description: "luxury! just for you",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await readUserSession();
  const getSession = user.data.user?.user_metadata ?? null;
  const url = await Helpers.fetchSupabaseUsers()
    .then((x) => x.avatar)
    .catch(() => "");
  const products = (await Helpers.fetchSupabaseProducts()) as ISBProducts[];
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppLayout products={products} url={url} session={getSession}>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
