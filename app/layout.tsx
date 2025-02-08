import "./globals.css";

import { Toaster } from "sonner";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/providers/theme-providers";
import { ConvexClientProvider } from "@/components/providers/convex-providers";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Potion",
  description: "The connected work station where ideas brew.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            storageKey='potion-theme'>
            {children}
            <Toaster position='bottom-center' />
            <ModalProvider />
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
