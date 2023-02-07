"use client";

import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><title>Yes Travel</title></head>
      <body className="flex flex-col">
        <ChakraProvider>
          <Navbar />
            <div className="h-full bg-gray-800">{children}</div>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
