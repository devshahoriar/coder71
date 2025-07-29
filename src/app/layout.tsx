import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { CartProvider } from "@/contexts/cart-context";
import { Navigation } from "@/components/shared/navigation";
import { Footer } from "@/components/shared/footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "YupStore - Premium E-commerce Experience",
  description:
    "Discover amazing products with our curated selection of premium items.",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      suppressHydrationWarning
      suppressContentEditableWarning
      lang="en"
      className={`${geist.variable}`}
    >
      <body>
        <TRPCReactProvider>
          <CartProvider>
            <div className="flex min-h-screen flex-col">
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
