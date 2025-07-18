import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";


const dmSans = DM_Sans({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Aesmos",
  description: "Aesmos a multiply calculator you can used it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
          className={`${dmSans.className} antialiased`}
        >
          <Toaster/>
          {children}
        </body>
      </html>
  );
}
